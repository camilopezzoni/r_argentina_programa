document.querySelector('#calcular_valores').onclick = function() {

    const listaNumeros = document.querySelectorAll('#lista_numeros')

    function calcularMax(Numeros){
        let max = 0;
    
        for(let i=0; i<Numeros.length; i++){
            
            if (Number(Numeros[i].innerText) > max) {
                max = Number(Numeros[i].innerText);
            }
        }
        return max;
    };
    let valorMax = calcularMax(listaNumeros);

    function calcularMin(numeros){
        let min = 999999;
    
        for(let i=0; i<numeros.length; i++){
            
            if (Number(numeros[i].innerText) < min) {
                min = Number(numeros[i].innerText);
            }
        }
        return min;
    };
    let valorMin = calcularMin(listaNumeros);

    function calcularprom (numeros){
        let suma = 0;
            
        for(let i=0; i<numeros.length; i++){
            suma += Number(numeros[i].innerText);
                        
        }
        return suma / numeros.length
    };
    let valorprom = calcularprom (listaNumeros);

    function calcularMasFrecuente(numeros){
        let numeroMasFrecuente
        let repeticionMax = 0
        for(let x=0; x<numeros.length; x++){

            let contRepeticion = 0
            for(let i=0; i<numeros.length; i++){
                
                if (Number(numeros[x].innerText) == Number(numeros[i].innerText)){
                    contRepeticion ++
                }

            }
            if (contRepeticion > repeticionMax){
                repeticionMax = contRepeticion;
                numeroMasFrecuente = Number(numeros[x].innerText);
            }

        }
        return numeroMasFrecuente
    }
    let valorMasFrecuente = calcularMasFrecuente(listaNumeros);


    document.querySelector('#maximo').innerText = `El maximo es ${valorMax}`;
    document.querySelector('#minimo').innerText = `El minimo es ${valorMin}`;
    document.querySelector('#promedio').innerText = `El promedio es ${valorprom}`;
    document.querySelector('#frecuente').innerText = `El mas frecuente es ${valorMasFrecuente}`;

    return false;

}