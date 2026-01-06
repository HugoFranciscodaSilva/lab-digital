const btnMenu = document.querySelector('.btn-menu')
const menu = document.getElementById('menu')
let FD = document.querySelector('.FD')

function AtivarMenu(){
    if(FD.textContent == "FD"){
        FD.innerHTML = "Fitness <br>:Dashboard"
    } else{
        FD.textContent = "FD"
    }
    menu.classList.toggle('ativo')

}
btnMenu.addEventListener('click', AtivarMenu)