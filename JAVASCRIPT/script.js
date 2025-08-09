let navlinks = document.getElementById('navlinks');
let menubar = document.getElementById('menu-icon');

menubar.addEventListener('click', () => {
    navlinks.classList.toggle('activateNavlinks');
});

// ✨ HIDE NAV MENU WHEN A LINK IS CLICKED
let links = navlinks.querySelectorAll('a');

links.forEach(link => {
    link.addEventListener('click', () => {
        navlinks.classList.remove('activateNavlinks');
    });
});
function loginPage(){
    window.location.href ='../admin/login.html'
}
function registerPage(){
    window.location.href ='../admin/register.html'
}