import rand from './random.js'

// create div to put the rows for news
const divNews = document.createElement('div')
divNews.classList.add('news')
const main = document.getElementById('mainNews')

let cardNum = 0
const generateNews = function() {
    const row = []
    const card = []
    const cardImg = []
    const cardBody = []
    const cardFooter = []
    // amount of rows
    const rowsAmount = 10
    for (let i = 0; i < rowsAmount; i++) {
        // generate news
        row[i] = document.createElement('div')
        row[i].classList.add('row')
        // amount of cards
        const cardsAmount = rand(3, 5)
        for (let j = 0; j < cardsAmount; j++) {
            // create cards
            card[j] = document.createElement('div')
            card[j].classList.add('card')

            cardNum++
            // create images
            cardImg[j] = document.createElement('img')
            cardImg[j].src = `https://picsum.photos/200?random=${cardNum}`
            cardImg[j].classList.add('card-img')
            // create card bodies
            cardBody[j] = document.createElement('div')
            cardBody[j].classList.add('card-body')
            cardBody[j].innerHTML = `<h4 class="card-title">Title ${cardNum}</h4>`
            // create card footers
            cardFooter[j] = document.createElement('div')
            cardFooter[j].classList.add('card-footer')
            cardFooter[j].innerHTML = '<p class="card-footer-category">category</p>'
            cardFooter[j].innerHTML += '<p class="card-footer-date">DD / MM / AAAA</p>'
            // put image, body and footer in the card
            card[j].append(cardImg[j], cardBody[j], cardFooter[j])
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