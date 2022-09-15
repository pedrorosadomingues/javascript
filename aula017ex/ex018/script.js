let numerosInseridos = []

function add() {
    let results = document.querySelector('#results')
    results.innerHTML = ''
    
    let caixa = document.querySelector('#num')
    let numeroInserido = caixa.value

    if (numeroInserido > 100 || numeroInserido < 1 || numeroInserido.length == 0) {
        window.alert('Número inválido')
    }else { for ( let i = 0; i < numerosInseridos.length; i++){
        if (numerosInseridos[i] === numeroInserido){
            return window.alert('Esse valor ja foi adicionado!')
        }
    }
                           
        numerosInseridos.push(numeroInserido)
        numerosInseridos.sort()
       let caixa = document.querySelector('#res')
       let texto = document.createElement('option')
       texto.text = `Valor ${numeroInserido} adicionado`
        caixa.appendChild(texto)
        console.log(numerosInseridos)
    }
    caixa.value = ''
    caixa.focus()
    
}

function finalizar() {
    let results = document.querySelector('#results')
    let linha1 = document.createElement('p')
    let linha2 = document.createElement('p')
    let linha3 = document.createElement('p')
    let linha4 = document.createElement('p')
    let linha5 = document.createElement('p')

    let somaTotal = 0
    if (numerosInseridos.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
    for ( let i = 0; i < numerosInseridos.length; i++) {
        somaTotal = somaTotal + Number(numerosInseridos[i])
    }
    
    results.innerText= ''
    linha1.innerText = `Ao todo, temos ${numerosInseridos.length} números cadastrados.`
    results.appendChild(linha1)
    linha2.innerText = `O maior valor informado foi ${numerosInseridos[numerosInseridos.length-1]}.`
    results.appendChild(linha2)
    linha3.innerText = `O menor valor informado foi ${numerosInseridos[0]}.`
    results.appendChild(linha3)
    linha4.innerText = `Somando todos os valores, temos ${somaTotal}.`
    results.appendChild(linha4)
    linha5.innerText = `A média dos valores digitados é ${somaTotal/numerosInseridos.length}.`
    results.appendChild(linha5)}




}