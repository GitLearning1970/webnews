const dropBtn = document.getElementById("dropdownBtn")
const dropCont = document.getElementById("dropdownCont").style

// open and close dropdown category list
dropBtn.addEventListener('click', () => dropCont.display != 'block' ? dropCont.display = 'block' : dropCont.display = 'none')

// close list when clicked anywhere
addEventListener('click', (ev) => {
    if (!ev.target.matches('#dropdownBtn')) {
        if (dropCont.display == 'block') {
            dropCont.display = 'none'
        }
    }
})