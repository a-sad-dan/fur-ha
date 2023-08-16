// TO reveal the messages
const characterButtons = document.querySelectorAll('.character');
characterButtons.forEach(Element => Element.addEventListener('click', showMessage));

function showMessage(event) {
    const index = event.target.getAttribute('data-index');
    const message = document.querySelector(`.m${index}`);

    const messageCopy = message.textContent;

    message.classList.toggle('collapsed');
    let currentIndex = 0;
    if (!message.classList.contains('collapsed')) {
        message.textContent = '';
        typeOutText();
        event.target.scrollIntoView({ behavior: "smooth" })
    }
    function typeOutText() {
        if (currentIndex < messageCopy.length) {
            message.textContent += messageCopy[currentIndex];
            currentIndex++;
            setTimeout(typeOutText, 20);
        }
    }
}




