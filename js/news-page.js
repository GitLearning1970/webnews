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

// ======== ADD COMMENTS ========
const commentsDiv = document.createElement('div')
commentsDiv.classList.add('comment-section')
const commentSec = document.querySelector('.comments')
commentSec.appendChild(commentsDiv)
const btn = document.querySelector('.comment-area .btn')

// add string 0 when time is less than 10
const formatTime = time => time >= 10 ? time : `0${time}`

// generate comments
let userNum = 0
const generateComment = function(text) {
    const d = new Date()
    // date
    const day = formatTime(d.getDate())
    const month = formatTime(d.getMonth()+1)
    const year = d.getFullYear()
    // hour
    const hours = formatTime(d.getHours())
    const minutes = formatTime(d.getMinutes())

    // comment set
    const commentUser = document.createElement('div')
    commentUser.classList.add('comment-user', 'd-flex')

    // photo
    const userphoto = document.createElement('i')
    userphoto.classList.add('fa-solid', 'fa-user', 'userphoto')

    // comment info (name, text and posting date)
    const commentUserinfo = document.createElement('div')
    commentUserinfo.classList.add('comment-userinfo')

    // user info (name and time)
    const userinfo = document.createElement('div')
    userinfo.classList.add('userinfo', 'd-flex')

    // user name
    userNum++
    const userinfoName = document.createElement('span')
    userinfoName.classList.add('userinfo-name')
    userinfoName.innerText = `user${userNum}`

    // comment posting date
    const userinfoTime = document.createElement('span')
    userinfoTime.classList.add('userinfo-time')
    userinfoTime.innerText = `${month} / ${day} / ${year} - ${hours}:${minutes}`
    
    // comment itself
    const commentText = document.createElement('p')
    commentText.innerText = text
    
    // "answer" button
    const commentBtn = document.createElement('button')
    commentBtn.type = 'button'
    commentBtn.classList.add('btn')
    commentBtn.innerText = 'Answer'

    userinfo.append(userinfoName, userinfoTime)
    commentUserinfo.append(userinfo, commentText, commentBtn)
    commentUser.append(userphoto, commentUserinfo)

    return commentUser
}

const commentTitle = document.querySelector('.comments-title-text')
let count = commentsDiv.childElementCount
const commentCount = document.createElement('span')
commentCount.textContent = ` (${count})`
commentTitle.appendChild(commentCount)

btn.addEventListener('click', () => {
    const commentInp = document.querySelector('.comment-area textarea')

    // add comment if the textarea is not empty
    if (commentInp.value.length > 0) {
        const user = generateComment(commentInp.value)
        commentsDiv.appendChild(user)
    }

    count = commentsDiv.childElementCount
    commentCount.textContent = ` (${count})`

    commentInp.value = ''
})