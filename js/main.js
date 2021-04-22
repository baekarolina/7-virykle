const heatingElements = document.querySelector('.heatingElements');
const numbers = ['1', '2', '3', '4'];
let HTML = '';

for (let i = 0; i < numbers.length; i++) {
    HTML += `<div class="hole" data-number="${numbers[i]}"></div>`
}

heatingElements.innerHTML = HTML;

const buttonsContainer = document.querySelector('.buttons');
const buttons = ['1', '2', '3', '4'];

HTML = '';

for (let i = 0; i < buttons.length; i++) {
    HTML += `<div class="controlButton" data-button="${buttons[i]}"></div>`
}

buttonsContainer.innerHTML = HTML;

const controlButtons = document.querySelectorAll('.controlButton');

for (let i = 0; i < controlButtons.length; i++) {
    const controlButton = controlButtons[i];
    const controlButtonNumber = controlButton.dataset.button;

    controlButton.addEventListener('click', function() {
        const holes = document.querySelectorAll('.hole');

        for (let i = 0; i < holes.length; i++) {
            const hole = holes[i];
            const holeNumber = hole.dataset.number;
            if (controlButtonNumber === holeNumber) {
                hole.classList.toggle('active');
            } 
        }
    });
}