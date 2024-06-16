function calcularTiempoTotal() {
    const listaHoras = document.querySelectorAll('#horas');
    const listaMinutos = document.querySelectorAll('#minutos');
    const listaSegundos = document.querySelectorAll('#segundos');

    
    function sumarValores(tiemposClases){
        let sumar = 0;
    
        for(let i=0; i<tiemposClases.length; i++){
            sumar += Number(tiemposClases[i].value);
        }
        return sumar;
    }

    let sumaDeHoras = sumarValores(listaHoras);
    let sumaDeMinutos = sumarValores(listaMinutos);
    let sumaDeSegundos = sumarValores(listaSegundos);
    
    let segundosFinales = sumaDeSegundos % 60
    let minutosFinales = Math.trunc(sumaDeSegundos / 60) + sumaDeMinutos % 60
    let horasFinales = Math.trunc(sumaDeMinutos / 60) + sumaDeHoras
    

    document.querySelector('#tiempo_total').innerText = `El tiempo total es ${horasFinales} horas, ${minutosFinales} minuto y ${segundosFinales} segundos`;

}
