
let navBar = document.querySelector('.navBar');
let body = document.querySelector('body');
let hamburger = document.querySelector('.hamburger-menu');
let themeChange = document.querySelector('#themeChange')
let themeIcon = document.querySelector('#themeIcon')
let hireBtn = document.querySelector('#hireBtn');
let themeText = document.querySelector('#themeText');
let active = true;

hireBtn.addEventListener("click", () => {
   location.href = 'https://t.me/Unknown_Article'
})

themeChange.addEventListener('click', () => {
    if (active == false) {
        body.classList.remove("light-mode");
        themeIcon.classList.replace("fa-moon", "fa-sun")
        themeText.innerHTML = "Light"
        active = true;
    }
    else if(active == true){
        body.classList.add("light-mode")
        themeIcon.classList.replace("fa-sun", "fa-moon")
        themeText.innerHTML = "Dark"
        active = false;
    }
});

hamburger.addEventListener('click', () => {
    if (active == false) {
        navBar.style.width = "3rem";
        body.style.marginLeft = "3rem"
        active = true;
    }
    else {
        navBar.style.width = "10rem";
        // body.style.marginLeft = "10rem"
        active = false;
    }
});






