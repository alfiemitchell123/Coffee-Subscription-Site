// Navigation

const toggleBtn = document.querySelector('#toggle-btn');
const overlayNav = document.querySelector('#overlay-nav');

toggleBtn.addEventListener('click', function () {
    overlayNav.style.display = (overlayNav.style.display === 'block') ? 'none' : 'block';
    toggleBtn.classList.toggle('opened');
})