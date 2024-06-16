function ingresarDatos() {
    const primerNombre = document.querySelector('#primer_nombre').value;
    const segundoNombre = document.querySelector('#segundo_nombre').value;
    const apellidos = document.querySelector('#apellidos').value;
    const edad = document.querySelector('#edad').value;

    document.querySelector('#resultado').innerText = `Bienvenido ${primerNombre} ${segundoNombre} ${apellidos}!`;
}