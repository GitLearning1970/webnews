import genCard from "./generate-cards.js"

const aside = document.querySelector('.asidenews')
const asideNews = document.createElement('div')
asideNews.classList.add('asidenews-cards')

// defining amount of cards
const cardsAmount = 6
// generate card news
const card = genCard(cardsAmount)

// append cards to the side of the page
card.forEach(cd => asideNews.appendChild(cd))
aside.appendChild(asideNews)