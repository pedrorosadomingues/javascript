function gt() {
    let ni = document.getElementById('nmr')
    let res = document.getElementById('res')
    let tab = document.getElementById('seltab')

    if (ni.value.length == 0) {
        window.alert('Por favor, digite um número!')
        tab.innerText = ''
        let item = document.createElement('option')
        item.text = 'Digite um número acima'
        tab.appendChild(item)
    } else{
       let i = Number(ni.value)
       tab.innerHTML = ''
       for (c = 1; c <= 10; c++) {
        let item = document.createElement('option')
        item.text = `${i}x${c} = ${i*c}`
        tab.appendChild(item)
       }
    }
}