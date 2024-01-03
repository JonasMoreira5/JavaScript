function contar() {
     var inicio = window.document.getElementById('txti')
     var fim = window.document.getElementById('txtf')
     var passo = window.document.getElementById('txtp')

     var res = document.getElementById('res')

     if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
          res.innerHTML = 'Impossivel contar!'
          //window.alert('[ERRO] Faltam dados!')
     } else {
          res.innerHTML = `Contando: <br>`
          let i = Number(inicio.value)
          let f = Number(fim.value)
          let p = Number(passo.value)

          if (p <= 0){
               window.alert('Passo inválido! Considerando PASSO 1')
               p = 1
          }

          if (i < f){
               // contagem crescente
               for (let c = i; c <= f; c += p) {
                    res.innerHTML += ` ${c} \u{1F449}`
               }

          } else {
               // contagem regressiva
               for (let c = 1; c >= f; c -= p) {
                    res.innerHTML += ` ${c} \u{1F449}`
               }
          }
          res.innerHTML += `\u{1F3C1}`
     }
}

