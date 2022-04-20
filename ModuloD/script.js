function carregar(){
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    //hora = 22
    msg.innerText = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        img.src = 'imagens/manha.jpg'
        document.body.style.backgroundColor = '#f7c795'
    }else if (hora >= 12 && hora < 18){
        img.src = 'imagens/tarde.jpg'
        document.body.style.backgroundColor = '#85592C'
    }else{
        img.src = 'imagens/noite.jpg'
        document.body.style.backgroundColor = '#381D30'
    }
}