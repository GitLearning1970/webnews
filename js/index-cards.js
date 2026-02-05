import rand from "./randomint.js"

const main = document.querySelector('main')

function mainFunction() {
    const news = document.createElement('div')
    news.classList.add('news')

    const row = []
    const card = []

    // defining amount of rows
    const rowsAmount = 8

    for (let i = 0; i < rowsAmount; i++) {
        // create rows
        row[i] = document.createElement('div')
        row[i].classList.add('row', 'd-flex')
        
        // defining amount of cards (random -> from 3 to 5)
        const cardsAmount = rand(3, 5)

        for (let j = 0; j < cardsAmount; j++) {
            // create cards
            card[j] = document.createElement('article')
            card[j].classList.add('card')

            // append cards in the rows
            row[i].appendChild(card[j])
        }

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

mainFunction()