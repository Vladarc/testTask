const menu = document.querySelector('.header__burger')

const overlay=document.querySelector('.head-overlay')

menu.addEventListener('click', event => {

   overlay.classList.add("overlay-prime")
})
overlay.addEventListener('click',event => {
    const{target}=event
    if(target.classList.contains('fas__exit')){
        overlay.classList.remove("overlay-prime")
    }
})
