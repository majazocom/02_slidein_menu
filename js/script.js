var toggle = document.querySelector('.toggle');
toggle.addEventListener('click', (e) => {
    openNavigation()
});

function openNavigation() {
    let nav = document.querySelector('nav');
    nav.classList.toggle('open');
}