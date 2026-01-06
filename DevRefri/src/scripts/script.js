const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
let Cards = document.querySelectorAll('.Card')
let ativo = 0

function EsconderCard(){
    for(let i = 0; i < Cards.length; i++){
        Cards[i].classList.remove('ativo')
    }
}
function MostrarCard(){
    Cards[ativo].classList.add('ativo')
}
function ProximoCard(){
    EsconderCard()
    if(ativo < Cards.length - 1){
        ativo++
    } else{
        ativo = 0
    }
    MostrarCard()
}
function VoltarCard(){
    EsconderCard()
    if(ativo <= 0){
        ativo = Cards.length - 1
    } else{
        ativo--
    }
    MostrarCard()
}

prev.addEventListener('click', VoltarCard)
next.addEventListener('click', ProximoCard)