const banner = document.getElementById('banner')
const welcomeMessage = document.getElementById('welcome-message');
const menuBtn = document.getElementById('menu-btn');
const menuPannel = document.getElementById('main-nav');
const showBtn = document.getElementById('show-btn');
const hiddenItems = document.getElementsByClassName('hidden-item');

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

showBtn.addEventListener('click', (e) => {
    if (e.target.textContent === 'Show more') {
        e.target.textContent = 'Show less';
        for (let i = 0; i < hiddenItems.length; i++){
        hiddenItems[i].style.display = 'flex';
        }
    } else {
        e.target.textContent = 'Show more';
        for (let i = 0; i < hiddenItems.length; i++){
        hiddenItems[i].style.display = 'none';
        }
    }
    
});