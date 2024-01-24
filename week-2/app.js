/* ====================
   Click to Change Text
==================== */
const title = document.querySelector('#title')
title.addEventListener('click', () => {
    title.textContent = 'Have a Good Time!'
})

/* ====================
   Click to Show/Close Menu
==================== */
let navbar = document.querySelector('#navbar')
let navTrigger = document.querySelector('#nav-trigger')
let navCross = document.querySelector('#nav-cross')

navTrigger.addEventListener('click', () => {
    navbar.classList.add('rwd-nav')
    navbar.classList.remove('hide-nav') //show menu
})

navCross.addEventListener('click', () => {
    navbar.classList.remove('rwd-nav')
    navbar.classList.add('hide-nav') //close menu
})

/* ====================
   Click to Show More Content Boxes
==================== */
let showContent = document.querySelector('#showContent')
let hiddenSec = document.querySelector('#hiddenSec')

showContent.addEventListener('click', () => {
    hiddenSec.classList.remove('hide')
})