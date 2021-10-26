const validator = (event) => {
    event.preventDefault();
};

export default function formEvents() {
    document.querySelector('#nameForm').addEventListener('submit', validator);
}
