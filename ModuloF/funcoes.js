function parimpar(n){
    if(n%2 == 0){
        return 'Par'
    }else{
        return 'Ímpar'
    }
}
var res = parimpar(12)
console.log(res)

function fatorial (n){
    var fat = 1
    for(c = n; c > 1; c--){
        fat *= c
    }
    return fat
}
console.log(fatorial(10))