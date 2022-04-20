function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.querySelector('input#ano').value
    var res = document.querySelector('div#res')
    if(fAno.length == 0 || fAno > ano || fAno < 1900){
        window.alert('Erro!!! Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fAno
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 12){
                img.setAttribute('src','imagens/criancaM.jpg')
            }else if(idade < 25){
                img.setAttribute('src','imagens/jovemM.jpg')
            }else if(idade < 50){
                img.setAttribute('src','imagens/adultoM.jpg')
            }else{
                img.setAttribute('src','imagens/idosoM.jpg')
            }
        }else{
            genero = 'Mulher'
            if(idade >= 0 && idade < 12){
                img.setAttribute('src','imagens/criancaF.jpg')
            }else if(idade < 25){
                img.setAttribute('src','imagens/jovemF.jpg')
            }else if(idade < 50){
                img.setAttribute('src','imagens/adultoF.jpg')
            }else{
                img.setAttribute('src','imagens/idosoF.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}