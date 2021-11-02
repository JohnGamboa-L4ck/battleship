import playerFactory from './factories/playerFactory';
import gameboardFactory from './factories/gameboardFactory';
import appendTo from './appendTo';
import elementFactory from './factories/elementFactory';
import list, { yAxis } from './gameData';

export default function game() {
    let players;
    let boards;

    const pvt = {
        reset: () => {
            players = [];
            boards = [];
            document.querySelector('#sea').innerHTML = '';
        },
        toggleNotifier: () => {
            document.querySelector('#notifier').classList.toggle('visible');
        },
        notify: (string) => {
            document.querySelector('#notifier').innerHTML = string;
        },
    };

    const setPlayerAndBoards = (input) => {
        pvt.reset();
        players.push(playerFactory(input));
        boards.push(gameboardFactory(input));
        players.push(playerFactory('AI'));
        boards.push(gameboardFactory('AI'));
    };

    const getPlayers = () => players;
    const getBoards = () => boards;

    const createUI = () => {
        pvt.toggleNotifier();
        pvt.notify(`Admiral ${players[0].name} deploy your ships!`);

        appendTo('#sea', [
            elementFactory('div', 'player-board', { id: 'playerBoard' }),
            elementFactory('div', 'harbor', { id: 'playerHarbor' }),
        ]);

        let x = 1;
        let y = 0;
        for (let counter = 1; counter <= 100; counter += 1) {
            const coord = `${yAxis[y]}${x}`;

            appendTo('#playerBoard', elementFactory('div', 'coord', { innerHTML: coord }));

            x += 1;
            if (x > 10) {
                x = 1;
                y += 1;
            }
        }

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
                elementFactory('label', '', { innerHTML: 'Starting point: ' }),
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
                } else {
                    pvt.notify(`Failed to deploy ${ship.name.toUpperCase()}!`);
                }
            };
        });
    };

    return {
        setPlayerAndBoards,
        getPlayers,
        getBoards,
        createUI,
        // start,
        // over,
        // reset,
    };
}
