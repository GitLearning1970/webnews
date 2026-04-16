let cardNum = 0
const generateCards = function(amount) {
    const card = []
    const img = []
    const body = []
    const title = []
    const footer = []
    const label = []
    const date = []

    for (let j = 0; j < amount; j++) {
        // create cards
        card[j] = document.createElement('article')
        card[j].classList.add('card')
        card[j].addEventListener('click', () => location.href = './news-page.html')

        cardNum++
        // create images
        img[j] = document.createElement('img')
        img[j].classList.add('card-img')
        img[j].src = `https://picsum.photos/200/?random=${cardNum}`

        // create bodies
        body[j] = document.createElement('div')
        body[j].classList.add('card-body')

        // create card titles
        title[j] = document.createElement('h4')
        title[j].classList.add('card-body-title')
        title[j].innerText = `Title ${cardNum}`

        // create footers
        footer[j] = document.createElement('div')
        footer[j].classList.add('card-footer', 'd-flex')

        // create card labels
        label[j] = document.createElement('span')
        label[j].classList.add('card-footer-label')
        label[j].innerText = 'label'

        // create posting date
        date[j] = document.createElement('span')
        date[j].classList.add('card-footer-date')
        date[j].innerText = 'MM / DD / YYYY'

        // append title in the body of the cards
        body[j].appendChild(title[j])

        // append labels and posting dates in the footer of the cards
        footer[j].append(label[j], date[j])

        // append images, card bodies and card footers in the cards article tag
        card[j].append(img[j], body[j], footer[j])
    }
    
    return card
}

export default generateCards