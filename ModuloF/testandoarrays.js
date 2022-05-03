var num = [5, 2, 9, 3, 8 ]
num.push(1)
num.sort()
console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} elementos`)
console.log(num[2])

//Mostrando os valores dos elementos do array

for(var pos = 0; pos < num.length; pos++){
    console.log(num[pos])
}

var pos = 0
while(pos < num.length){
    console.log(num[pos])
    pos++
}

//Usamos a sintaxe abaixo para repetições com array para simplificar mais
for(var posicao in num){
    console.log(num[posicao])
}

console.log(num.indexOf(9))