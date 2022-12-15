const button = document.querySelector('.burger-button')
const nav = document.querySelector('.nav')
const close = document.querySelector('.close-menu')

button.addEventListener('click',()=>{
    nav.classList.toggle('active')
})

close.addEventListener('click',()=>{
    nav.classList.toggle('active')
})