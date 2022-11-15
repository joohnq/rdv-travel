const btnMenu = document.getElementById('btn-menu')

const offcanvas = document.getElementById('offcanvasExample')

btnMenu.addEventListener('click', () => {
    if(offcanvas.classList.contains('show')){
        btnMenu.classList.remove('collapsed')
    }else{
        btnMenu.classList.add('collapsed')
    }
})