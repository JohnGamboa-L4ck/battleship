import game from './game';

let battleship;

const validator = (event) => {
    event.preventDefault();
    const input = document.querySelector('#nameInput').value.trim();
    const error = document.querySelector('#nameError');

    if ((input || (input === 0)) && ((input.length <= 20) && (input.toUpperCase() !== 'AI'))) {
        error.className = 'name-error';
        document.querySelector('#header').classList.add('reduced');
        document.querySelector('#nameForm').classList.add('hidden');
        document.querySelector('#sea').classList.add('visible');

        battleship = game();
        battleship.setPlayerAndBoards(input);
        battleship.prepUI();
    } else {
        error.className = 'name-error visible';
        if (input.length > 20) {
            error.textContent = 'Admiral, shorten your name!';
        } else if (input.toUpperCase() === 'AI') {
            error.textContent = "Admiral, you can't use that name!";
        } else {
            error.textContent = 'Admiral, enter your name!';
        }
    }
};

export default function events() {
    document.querySelector('#nameForm').addEventListener('submit', validator);
}
