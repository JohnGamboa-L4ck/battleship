import playerFactory from './factories/playerFactory';
import gameboardFactory from './factories/gameboardFactory';
import appendTo from './appendTo';
import elementFactory from './factories/elementFactory';
import list, { yAxis } from './gameData';

export default function game() {
    let players;
    let boards;
    let aiCoordsOption;

    const pvt = {
        colors: ['indigo', 'green', 'orange', 'blue', 'violet'],
        reset: () => {
            players = [];
            boards = [];
            aiCoordsOption = [];
            document.querySelector('#sea').innerHTML = '';
        },
        toggleNotifier: () => {
            document.querySelector('#notifier').classList.toggle('visible');
        },
        backToHome: () => {
            pvt.reset();
            pvt.toggleNotifier();
            document.querySelector('#header').classList.remove('reduced');
            document.querySelector('#nameForm').classList.remove('hidden');
        },
        notify: (string) => {
            document.querySelector('#notifier').innerHTML = string;
        },
        notifyPlus: (string) => {
            document.querySelector('#notifier').innerHTML += `<br>${string}`;
        },
        randomInteger: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
        aiRandomDeploy: () => {
            const axis = ['horizontal', 'vertical'];
            list.forEach((ship) => {
                let condition = false;
                while (condition === false) {
                    const result = boards[1].setShipCoords(ship.name,
                        yAxis[pvt.randomInteger(0, 9)], Number(pvt.randomInteger(1, 10),
                            axis[pvt.randomInteger(0, 1)]));
                    if (result) condition = true;
                }
            });
        },
        createGameboardUI: (clsname, elementID) => {
            appendTo('#sea', elementFactory('div', clsname, { id: elementID }));
            let x = 1;
            let y = 0;
            for (let counter = 1; counter <= 100; counter += 1) {
                const coord = `${yAxis[y]}${x}`;
                if (aiCoordsOption.length < 100) aiCoordsOption.push(coord);

                appendTo(`#${elementID}`, elementFactory('div', `coord ${coord}`,
                    { innerHTML: coord }));

                x += 1;
                if (x > 10) {
                    x = 1;
                    y += 1;
                }
            }
        },
        displayMissedShots: () => {
            const playerMissedAttacks = boards[1].getMissedAttacks();
            const aiMissedAttacks = boards[0].getMissedAttacks();
            document.querySelector('#notifier').innerHTML += `
                <div><strong>Admiral ${players[0].name.toUpperCase()}</strong>, <br>
                ${playerMissedAttacks.length}
                missed shots: ${playerMissedAttacks} <br>
                <strong>Computer ${players[1].name.toUpperCase()}</strong>, <br>
                ${aiMissedAttacks.length}
                missed shots: ${aiMissedAttacks}</div>`;
            appendTo('#notifier', elementFactory('button', 'home-button', [
                { innerHTML: '< Home' },
                { id: 'home' },
            ]));
            document.querySelector('#home').onclick = pvt.backToHome;
        },
        checkWinner: () => {
            let result = false;
            if (boards[0].isDefeated() && boards[1].isDefeated()) {
                pvt.notify('Game ended with a draw!');
                result = true;
            } else if (boards[1].isDefeated()) {
                pvt.notify(`Game Over! Admiral ${players[0].name.toUpperCase()} wins!`);
                result = true;
            } else if (boards[0].isDefeated()) {
                pvt.notify(`Game Over! Computer ${players[1].name.toUpperCase()} wins!`);
                result = true;
            }
            if (result) {
                document.querySelector('#sea').classList.remove('visible');
                pvt.displayMissedShots();
            }
        },
        aiTurn: () => {
            const random = pvt.randomInteger(0, (aiCoordsOption.length - 1));
            const randomCoord = aiCoordsOption[random];
            const coordIndex = aiCoordsOption.indexOf(randomCoord);
            if (coordIndex > -1) {
                aiCoordsOption.splice(coordIndex, 1);
            }

            const tile = document.querySelector(`#playerBoard .${randomCoord}`);
            if (boards[0].receiveAttack(randomCoord)) {
                tile.classList.add('taken', 'hit');
                tile.innerHTML = '&#128293;';
                pvt.notifyPlus(`AI fired in ${randomCoord}, hit! &#128293;`);
            } else {
                tile.classList.add('miss');
                tile.innerHTML = '&#127754;';
                pvt.notifyPlus(`AI fired in ${randomCoord}, miss! &#127754;`);
            }
            pvt.checkWinner();
        },
    };

    const setPlayerAndBoards = (input) => {
        pvt.reset();
        players.push(playerFactory(input));
        boards.push(gameboardFactory(input));
        players.push(playerFactory('AI'));
        boards.push(gameboardFactory('AI'));
    };

    const updateUI = () => {
        document.querySelector('#playerHarbor').remove();
        pvt.notify('Game started! <br> Click anywhere in the right gameboard.');
        pvt.createGameboardUI('ai-board', 'aiBoard');

        const coords = boards[1].getAllCoords();
        const arrayOfAICoords = [];

        coords.forEach((coord) => {
            const array = coord.coords;
            array.forEach((combination) => {
                arrayOfAICoords.push(combination);
            });
        });

        const hundredTiles = document.querySelectorAll('#aiBoard .coord');
        hundredTiles.forEach((element) => {
            const currentCoord = element.className.split(' ')[1];
            const tile = element;
            tile.addEventListener('click', () => {
                if (arrayOfAICoords.includes(currentCoord)) {
                    tile.classList.add('taken', 'hit');
                    tile.innerHTML = '&#128293;';
                    if (boards[1].receiveAttack(currentCoord)) {
                        pvt.notify(`You fired in ${currentCoord}, hit! &#128293;`);
                    }
                } else {
                    tile.classList.add('miss');
                    tile.innerHTML = '&#127754;';
                    if (boards[1].receiveAttack(currentCoord) === false) {
                        pvt.notify(`You fired in ${currentCoord}, miss! &#127754;`);
                    }
                }
                pvt.aiTurn();
            }, { once: true });
        });
    };

    const prepUI = () => {
        pvt.toggleNotifier();
        pvt.notify(`Admiral ${players[0].name} deploy your ships!`);

        pvt.createGameboardUI('player-board', 'playerBoard');
        appendTo('#sea', elementFactory('div', 'harbor', { id: 'playerHarbor' }));

        list.forEach((ship, index) => {
            const dockNum = index + 1;
            const dock = `dock${dockNum}`;
            const shipBody = `shipBody${dockNum}`;
            const formName = `shipForm${dockNum}`;
            const button = `button${dockNum}`;
            const selectY = `selectY${dockNum}`;
            const selectX = `selectX${dockNum}`;
            const submit = `submit${dockNum}`;
            let shipAxis;

            appendTo('#playerHarbor',
                elementFactory('div', 'dock', { id: dock }));
            appendTo(`#dock${dockNum}`, [
                elementFactory('p', 'ship-name', { innerHTML: `${ship.name} (${ship.loa})` }),
                elementFactory('div', 'ship-body', { id: shipBody }),
                elementFactory('form', 'ship-form', { id: formName }),
            ]);

            const shipElement = document.querySelector(`#${shipBody}`);
            if (ship.loa <= 3) {
                shipElement.classList.add('vertical');
                shipAxis = 'vertical';
            } else {
                shipAxis = 'horizontal';
            }

            appendTo(`#${formName}`, [
                elementFactory('label', '', { innerHTML: 'Starting coord:' }),
                elementFactory('select', '', { id: selectY }),
                elementFactory('select', '', { id: selectX }),
                elementFactory('br', ''),
                elementFactory('button', 'rotate-button', [
                    { innerHTML: 'rotate' },
                    { id: button },
                    { type: 'button' },
                ]),
                elementFactory('button', 'deploy-button', [
                    { innerHTML: 'deploy' },
                    { id: submit },
                    { type: 'submit' },
                ]),
            ]);

            yAxis.forEach((axis, axisIndex) => {
                appendTo(`#${selectY}`,
                    elementFactory('option', '', [
                        { innerHTML: axis },
                        { value: axis },
                    ]));
                appendTo(`#${selectX}`,
                    elementFactory('option', '', [
                        { innerHTML: axisIndex + 1 },
                        { value: axisIndex + 1 },
                    ]));
            });

            for (let i = 1; i <= ship.loa; i += 1) {
                appendTo(`#${shipBody}`, elementFactory('div', 'block'));
            }

            document.querySelector(`#${button}`).onclick = () => {
                shipElement.classList.toggle('vertical');
                if (shipElement.classList.contains('vertical')) {
                    shipAxis = 'vertical';
                } else {
                    shipAxis = 'horizontal';
                }
            };

            document.querySelector(`#${submit}`).onclick = (e) => {
                e.preventDefault();
                const yValue = document.querySelector(`#${selectY}`).value;
                const xValue = document.querySelector(`#${selectX}`).value;

                const result = boards[0].setShipCoords(ship.name, yValue, Number(xValue), shipAxis);
                if (result) {
                    pvt.notify(`${ship.name.toUpperCase()} deployed! ${result}`);
                    document.querySelector(`#${dock}`).style.display = 'none';
                    result.forEach((coord) => {
                        document.querySelector(`#playerBoard .${coord}`).classList.add('taken');
                        document.querySelector(`#playerBoard .${coord}`).style
                            .backgroundColor = pvt.colors[index];
                    });
                } else {
                    pvt.notify(`Failed to deploy ${ship.name.toUpperCase()}!`);
                }
                if (boards[0].isReady()) pvt.aiRandomDeploy();
                if (boards[1].isReady()) updateUI();
            };
        });
    };

    return {
        setPlayerAndBoards,
        prepUI,
    };
}
