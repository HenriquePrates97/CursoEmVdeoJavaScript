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