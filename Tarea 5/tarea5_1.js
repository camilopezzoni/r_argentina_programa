function calcularSalarioMensual(){
    salario_mensual = document.querySelector('#salario_anual').value / 12;
    document.querySelector('#salario_mensual').value = salario_mensual;
    //return false;
}