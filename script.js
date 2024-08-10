function calcularTabuada(){
    var num = document.getElementById('txtnum')
    var tab = document.getElementById('seltab')

    if (num.value.length==0){
        window.alert (`[ERRO]faltam dados`)
    }else{

        var numero = Number (num.value)
        var c= 1
        tab.innerHTML = ''
    while(c <= 10){
            var item = document.createElement (`option`)
            item.text = `${numero} x ${c} = ${numero*c}`
            tab.appendChild(item)
            c++
            }
        }
    }
