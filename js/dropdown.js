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