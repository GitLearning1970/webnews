const screen = document.querySelectorAll('.datascreen')
const openScreen = document.querySelectorAll('.datascreen-links .link')

// Change screens display
openScreen.forEach(opsc => {
    opsc.addEventListener('click', () => {
        screen.forEach(sc => sc.style.display == 'block' ? sc.style.display = 'none' : sc.style.display = 'block')
    })
})