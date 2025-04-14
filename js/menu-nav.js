// Aguarda o DOM carregar completamente antes de rodar o script
document.addEventListener('DOMContentLoaded', () => {
    const menuIconOpen = document.querySelector('.menu-open-img');
    const menuIconClose = document.querySelector('.menu-close-img');
    const menuContent = document.querySelector('.menu-navegation-mobi');
    const menuLinks = document.querySelectorAll('.menu-link');
  
    if (!menuIconOpen || !menuIconClose || !menuContent) {
      console.warn('Alguns elementos do menu não foram encontrados.');
      return;
    }
  
    // Abre o menu
    menuIconOpen.addEventListener('click', () => {
      menuContent.style.display = 'block';
      menuIconClose.style.display = 'block';
      menuContent.style.transition = 'all 0.3s ease-in-out';
    });
  
    // Fecha o menu
    const closeMenu = () => {
      menuContent.style.display = 'none';
      menuIconClose.style.display = 'none';
    };
  
    // Clica no botão de fechar
    menuIconClose.addEventListener('click', closeMenu);
  
    // Clica em qualquer link do menu
    menuLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  });
  