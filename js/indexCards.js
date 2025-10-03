import rand from './random.js'

// create div to put the rows for news
const divNews = document.createElement('div')
divNews.classList.add('news')
const main = document.getElementById('mainNews')

const generateNews = function() {
    const row = []
    const card = []
    // amount of rows
    const rowsAmount = 6
    for (let i = 0; i < rowsAmount; i++) {
        // generate news
        row[i] = document.createElement('div')
        row[i].classList.add('row')
        // amount of cards
        const cardsAmount = rand(3, 5)
        // generate cards
        for (let j = 0; j < cardsAmount; j++) {
            card[j] = document.createElement('div')
            card[j].classList.add('card')
            // put the cards in each row
            row[i].appendChild(card[j])
        }

        switch(cardsAmount) {
            case 3: { // case of cardsAmount = 3
                let num, indexCard
                for (let j = 0; j < 2; j++) {
                    while(num == indexCard) {
                        indexCard = rand(0, 2)
                    }
                    num = indexCard
                    card[indexCard].classList.add('card-w')
                }
                break
            }
            case 4: // case of cardsAmount = 4
                let indexCard = rand(0, 3)
                card[indexCard].classList.add('card-w')
                break
            default:
                break
        }
        // put rows in the div
        divNews.appendChild(row[i])
    }
    main.appendChild(divNews)
}

generateNews()