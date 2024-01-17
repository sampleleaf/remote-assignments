/* ====================
   Click to Change Text
==================== */
let title = document.querySelector('#title')
title.addEventListener('click', () => {
    title.textContent = 'Have a Good Time!'
})

/* ====================
   Click to Show/Close Menu
==================== */
let navbar = document.querySelector('#navbar')
let navTrigger = document.querySelector('#nav-trigger')
let navCross = document.querySelector('#nav-cross')

navTrigger.addEventListener('click', function(){
    navbar.classList.add('rwd-nav')
    navbar.classList.remove('hide-nav') //show menu
})

navCross.addEventListener('click', function(){
    navbar.classList.remove('rwd-nav')
    navbar.classList.add('hide-nav') //close menu
})