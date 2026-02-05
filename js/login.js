const openLogin = document.querySelector('.navbar-header .btn')
const closeLogin = document.querySelector('.modal-close')
const login = document.querySelector('.loginmodal')

// open login screen
openLogin.addEventListener('click', () => login.showModal())
// close login screen
closeLogin.addEventListener('click', () => login.close())