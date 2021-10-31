const validator = (event) => {
    event.preventDefault();
    const input = document.querySelector('#nameInput').value.trim();
    const error = document.querySelector('#nameError');

    if ((input || input === 0) && input.length <= 20) {
        error.className = 'name-error';
        document.querySelector('#nameForm').classList.add('hidden');
        document.querySelector('#sea').classList.add('visible');
        console.log(input);
        // how can we export the form data
    } else {
        error.className = 'name-error visible';
        if (input.length > 20) {
            error.textContent = 'Admiral, shorten your name!';
        } else {
            error.textContent = 'Admiral, enter your name!';
        }
    }
};

export default function events() {
    document.querySelector('#nameForm').addEventListener('submit', validator);
}
