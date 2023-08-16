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
const catMessages = ['Meoww Meoww', '*Purrs*', '*Claws at you*', 'We think it will last', 'Thank you Farha', 'That felt nice', 'I loved that', 'Pls do some more', 'Owie', '*sleeps*', 'Scratch my ears pls', 'Myau', 'Mewww', '*stretches*','miyauuu']
const cats = document.querySelectorAll('.cat');
cats.forEach((cat, index) => cat.addEventListener('click', () => catSays()));

function catSays() {
    const message = catMessages[Math.floor(Math.random() * catMessages.length)]
    writeToModal(message,900);
}

function writeToModal(message,time) {
    const modal = document.querySelector('.modal');
    modal.textContent = message;
    modal.classList.remove('hidden');

    setTimeout(() => {
        modal.classList.add('hidden');
    }, time);
}


//Logic for the metro
document.querySelector('.metro').addEventListener('click',metroSays);
const metroMessages = ["you look cute together","Next station is Panchsheel park, get off","Bachon ka hath pakad ke rakhe (hold his hand)","mind the gap(never let him go)","transistor or a bag could be a bomb(u = bomb)","Do not sit on the floor of the train(dan = floor)","D<3F Fr Fr"]
function metroSays() {
    const message = metroMessages[Math.floor(Math.random() * metroMessages.length)];
    writeToModal(message,1500);
}






