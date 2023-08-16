const characterButtons = document.querySelectorAll('.character');
characterButtons.forEach(Element => Element.addEventListener('click', showMessage));

function showMessage(event) {
    const index = event.target.getAttribute('data-index');
    const message = document.querySelector(`.m${index}`);

    const messageCopy = message.textContent;

    message.textContent = '';
    message.classList.toggle('collapsed');
    let currentIndex = 0;
    
    typeOutText();
    function typeOutText() {
        if (currentIndex < messageCopy.length) {
            message.textContent += messageCopy[currentIndex];
            currentIndex++;
            setTimeout(typeOutText, 20);
        }
        message.scrollIntoView({behavior:"smooth"})
    }
}


