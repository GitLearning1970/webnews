const photo = document.querySelector('.navbar-header .userphoto')
const closeMenu = document.querySelector('.usermenu-close span')

const usermenuBack = document.querySelector('.usermenu-back').style
const usermenu = document.querySelector('.usermenu').style

const changeMenu = function(display, width) {
    usermenuBack.display = display
    usermenu.width = width
}

// open menu
photo.addEventListener('click', () => changeMenu('block', '250px'))
// close menu
closeMenu.addEventListener('click', () => changeMenu('none', '0'))