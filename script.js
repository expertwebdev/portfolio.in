// window.addEventListener('load', () => {
    let navBar = document.querySelector('.navBar');
    let body = document.querySelector('body');
    let hamburger = document.querySelector('.hamburger-menu');
    let themeChange = document.querySelector('#themeChange')
    let themeIcon = document.querySelector('#themeIcon')
    let active = true;

    themeChange.addEventListener('click', () => {
        if (active == false) {
            body.classList.remove("light-mode");
            active = true;
        }
        else {
            body.classList.add("light-mode")
            themeIcon.classList.replace("fa-sun", "fa-moon")
            active = false;
        }
    })

    hamburger.addEventListener('click', () => {
        if (active == false) {
            navBar.style.width = "4rem";
            body.style.marginLeft = "4rem"
            active = true;
        }
        else {
            navBar.style.width = "15rem";
            body.style.marginLeft = "15rem"
            active = false;
        }
    })





