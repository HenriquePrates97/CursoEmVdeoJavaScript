//Condição simples
var vel = 60.5
console.log(`A velocidade do seu carro é ${vel}km/h`)
if(vel > 60){
    console.log(`Você passou a ${vel}km/h e foi MULTADO!`)
}
console.log('Dirija sempre usando cinto de segurança!')

//Condição composta
var pais = 'brasil'
if(pais == 'Brasil' || pais == 'brasil'){
    console.log(`Seu país é ${pais}, logo você é brasileiro`)
}else{
    console.log(`Seu país é ${pais}, logo você é estrangeiro`)
}

//Condição aninhada
var idade = 68
if(idade < 16){
    console.log('Não vota')
}else{
    if(idade < 18 || idade > 67){
        console.log('Voto opcional')
    }else{
        console.log('Voto obrigatório')
    }
}

//Bom dia, boa tarde, boa noite
var agora = new Date() //new Date serve pra buscar as informações do tempo do sistema, como dia, hora, ano, meses, segundos...
var hora = agora.getHours() //adicionamos a variavel com o date a uma outra variavel e selecionamos o que desejamos pegar
console.log(`Agora são exatamente ${hora} horas.`)
if(hora < 12){
    console.log('Bom dia!!!')
}else if(hora <=18){
    console.log('Boa tarde!!!')
}else{
    console.log('Boa noite!!!')
}

//Condição multipla
var agora = new Date()
var diaSem = agora.getDay() // 0 = dom, 1 = seg, 2 = ter, 3 = qua, 4 = qui, 5 = sex, 6 = sab
console.log(diaSem)
switch(diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('Erro!!! Dia inválido!')
}