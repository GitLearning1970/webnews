import rand from "./randomint.js"
import genCard from "./generate-cards.js"

const main = document.querySelector('main')

function generateNews() {
    const news = document.createElement('div')
    news.classList.add('news')

    const row = []

    // defining amount of rows
    const rowsAmount = 8

    for (let i = 0; i < rowsAmount; i++) {
        // create rows
        row[i] = document.createElement('div')
        row[i].classList.add('row', 'd-flex')
        
        // defining amount of cards (random -> from 3 to 5)
        const cardsAmount = rand(3, 5)
        // generate cards
        const card = genCard(cardsAmount)

        // append cards to each row
        card.forEach(cd => row[i].appendChild(cd))

        // increse width of the "chosen" cards
        switch (cardsAmount) {
            case 3: { // if cardsAmount == 3
                let cardIndex, num
                for (let j = 0; j < 2; j++) {
                    while (cardIndex == num) {
                        cardIndex = rand(0, 2)
                    }
                    card[cardIndex].classList.add('card-w')
                    num = cardIndex
                }
                break
            }
            case 4: // if cardsAmount == 4
                const cardIndex = rand(0, 3)
                card[cardIndex].classList.add('card-w')
                break
            default: // if cardsAmount == 5
                break
        }
        // append rows in the "news" div
        news.appendChild(row[i])
    }
    // append "news" div in the main
    main.appendChild(news)
}

generateNews()

// // ======== DROPDOWN BUTTON ========
const btn = document.querySelector('.dropdown-btn')
const dropCont = document.querySelector('.dropdown-cont').style

// open and close dropdown content
btn.addEventListener('click', () => dropCont.display === 'none' ? dropCont.display = 'block' : dropCont.display = 'none')

// close dropdown content by clicking outside
addEventListener('click', (ev) => {
    if (!ev.target.matches('.dropdown-btn') && dropCont.display === 'block') {
        dropCont.display = 'none'
    }
})