function tabuada(){
    let num = document.getElementById('txtnum')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0){
        window.alert('Por favor, Digite um número!')
    } else {
        // Converter para número
        let n = Number(num.value)
        let c = 1

        // limpar a tabuada
        tab.innerHTML = ''

        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }7
}