function tabuada(){
    var num = document.querySelector('input#txtn')
    var tab = document.querySelector('select#seltab')
    if(num.value.length == 0){
        window.alert('Por favor, digite um número para começarmos!')
    }else{
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ''
        while(c <= 10){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}