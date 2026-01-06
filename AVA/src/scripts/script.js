const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
let carrossel = document.querySelectorAll('.carrossel-item')
let ativo = 0
const btn = document.querySelectorAll('.btn')
const open = document.querySelector('.open')
const close = document.querySelector('.close')
if(prev && next && carrossel){
    function MostrarItem(){
        carrossel[ativo].classList.add('ativo')
    }
    function EsconderItem(){
        for(let i = 0;i < carrossel.length; i++){
            carrossel[i].classList.remove('ativo')
        }
    }
    function ProximoItem(){
        EsconderItem()
        if(ativo < carrossel.length -1){
            ativo++
        }else{
            ativo = 0
        }
        MostrarItem()
    }

    function VoltarItem(){
        EsconderItem()
        if(ativo >  0){
            ativo--
        } else{
            ativo = carrossel.length -1
        }
        MostrarItem()
    }

    prev.addEventListener('click', VoltarItem)
    next.addEventListener('click', ProximoItem)
    setInterval(ProximoItem,3000)
}
if(btn){
    for(let i = 0; i < btn.length; i++){
        btn[i].addEventListener('click',()=>{
            if(btn[i].textContent == "Inscrever-se"){
                btn[i].textContent = "Inscrito"
            } else{
                btn[i].textContent = "Inscrever-se"
            }
            btn[i].classList.toggle('ativo')
        })
    }
}
if(open){
    const modalId = open.getAttribute('data-modal')
    const modal = document.getElementById(modalId)
    open.addEventListener('click',()=>{
        modal.showModal()
    })
    close.addEventListener('click',()=>{
        modal.close()
    })
}
