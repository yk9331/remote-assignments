const banner = document.getElementById('banner')
const welcomeMessage = document.getElementById('welcome-message');
const menuBtn = document.getElementById('menu-btn');
const menuPannel = document.getElementById('main-nav');

banner.addEventListener('click', (e) => {
    if (welcomeMessage.textContent === 'Welcome to My Portfolio') {
        welcomeMessage.textContent = 'Have a Good Time!';
    } else {
        welcomeMessage.textContent = 'Welcome to My Portfolio';
    }
});


menuBtn.addEventListener('click', (e) => {
    if (menuBtn.textContent === 'menu') {
        menuPannel.style.display = 'flex';
        menuBtn.textContent = 'close';
    } else {
        menuPannel.style.display = null;
        menuBtn.textContent = 'menu';
    }
});