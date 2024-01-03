let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    // verifica se o valor ta na faixa entre 1 e 100
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}


function inlista(n, l){
    // Verifica se o valor já existe na lista
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    // Verifica se é um numero e se ele está na lista
    if (isNumero(num.value) && !inlista(num.value, valores)){
        valores.push(Number(num.value)) // converte os valores para numero
        let item = document.createElement('option') // opções para ser mostrado dentro da div
        item.text = `valor ${num.value} adicionado.` // mensagem que sera mostrado dentro da div
        lista.appendChild(item)    // adicona o numero na lista
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''  // limpa o campo de adicionar valor
    num.focus()
}

function finalizar() {
    if(valores.length == 0){
        // Verifica se o vetor estiver vazio - Manda um alerta
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let totaelementos = valores.length
        let  maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let posicao in valores){
            // Soma todos valores
            soma += valores[posicao]

            // Verifica maior e menor valor
            if (valores[posicao] > maior)
                maior = valores[posicao]
            if(valores[posicao] < menor)
                menor = valores[posicao]
        }
        
        media = soma/totaelementos
        // Mostrar na tela mais de um elemento, usando concatenaçãomodelo
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${totaelementos} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}