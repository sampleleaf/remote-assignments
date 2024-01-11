let navbar = document.querySelector('#navbar')
let navTrigger = document.querySelector('#nav-trigger')

navTrigger.addEventListener('click', function(){
    navbar.classList.toggle('rwd-nav') //change flex-direction
    navbar.classList.toggle('hide-nav') //change visibility
})