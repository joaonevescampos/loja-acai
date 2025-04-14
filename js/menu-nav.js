// Lógica de abrir e fechar o menu 

// - pegar botão de menubar
// - ao clicar, abrir menubar
// - ao clicar no botão de fechar, fecha menu

const menuIconOpen = document.querySelector('.menu-open-img');
const menuIconClose = document.querySelector('.menu-close-img');
const menuContent = document.querySelector('.menu-navegation-mobi')
const menuLinks = document.querySelectorAll('.menu-link')

const openMenu = () => {
    menuIconOpen.addEventListener('click', () => {
        menuContent.style.display = 'block';
        menuIconClose.style.display = 'block';
        menuContent.style.transition = '2s';

    })
}

const closeMenu = () => {
    menuIconClose.addEventListener('click', () => {
        menuContent.style.display = 'none';
        menuIconClose.style.display = 'none';
    })
    menuLinks.forEach((link) => {
        link.addEventListener('click', () => {
            menuContent.style.display = 'none';
        })
    })
}

closeMenu()
openMenu()


