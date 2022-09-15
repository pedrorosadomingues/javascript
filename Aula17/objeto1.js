function numeroDez () {

    let sequencia1 = [5,1,2,3,4]

    let somaMaior = 0

    let somaMenor = 0

    let numeroMaior = 0

    let numeroMenor = sequencia1[0]

    for ( i = 0; i < sequencia1.length; i++) {
       
        if ( sequencia1[i] > numeroMaior ) numeroMaior = sequencia1[i]
        if ( sequencia1[i] < numeroMenor ) numeroMenor = sequencia1[i]
    } 
    
    for ( i = 0; i < sequencia1.length; i++){

        if ( sequencia1[i] !== numeroMaior) somaMenor += sequencia1[i]
        if ( sequencia1[i] !== numeroMenor) somaMaior += sequencia1[i]

    }

    let resultado = [somaMenor,somaMaior]
    console.log(resultado)
}
numeroDez ()