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

//Logic to mew the cat

const catMessages = ['meoww meoww', '*purrs*','*claws at you*','we think it will last','thank you farha','that felt nice','i loved that','pls do some more','owie','*sleeps*','scratch my ears pls','myau','mewww','*stretches*']

const cats = document.querySelectorAll('.cat');
cats.forEach((cat, index) => cat.addEventListener('click', () => catSays()));

function catSays() {
    const message = catMessages[Math.floor(Math.random()*catMessages.length)]
    const modal = document.querySelector('.cat.modal');
    modal.textContent = message;
    modal.classList.remove('hidden');

    setTimeout(() => {
        modal.classList.add('hidden');
    }, 1000);
}




