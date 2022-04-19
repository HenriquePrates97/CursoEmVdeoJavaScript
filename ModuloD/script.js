function carregar(){
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerText = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        img.src = 'imagens/manha.jpg'
    }else if (hora >= 12 && hora < 18){
        img.src = 'imagens/tarde.jpg'
    }else{
        img.src = 'imagens/noite.jpg'
    }
}