const btn = document.querySelector('.btn-menu')
const menu = document.querySelector('.menu')
const title_menu = document.querySelector('.title-menu')

function AbrirMenu(){
    menu.classList.toggle('ativo')
    if(title_menu.textContent == "FD"){
        title_menu.textContent = ":Fitness Dashboard"
    } else{
        title_menu.textContent = "FD"
    }
}

btn.addEventListener('click', AbrirMenu)