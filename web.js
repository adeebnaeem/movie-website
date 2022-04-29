let disnone = document.querySelector(".disnone")
let disnone1 = document.querySelector(".disnone1")
let siginwidget = document.querySelector(".sigin-widget")
let singupbtn1 = document.querySelector("#singupbtn")



singupbtn1.addEventListener('click', (e) => {
    e.preventDefault();
    siginwidget.classList.add("disnone")
        // siginwidget.classList.remoev("disnone")
    disnone.classList.add("disnone1")
});