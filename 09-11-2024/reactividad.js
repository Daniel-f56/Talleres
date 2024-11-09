//Extraemos lo que necesitemos de la paguina con sus ids:
const boton = document.getElementById('miBoton');
const buscar = document.getElementById('buscar');
const pasar = document.getElementById('pasar');

//Usamos addEventListener para escuchar el evento click
boton.addEventListener('click', function(){
    //Mostrar un mensaje en la consola y una alerta
    alert('Haz echo click en el boton');
    console.log('El boton fue clickeado');
});

buscar.addEventListener('keyup', function(){
    //Mostrar un mensaje en la consola y una alerta
    alert('Estas copiando');
    console.log('Estas escribiendo');
});

pasar.addEventListener('mousemove', function(){
    //Mostrar un mensaje en la consola y una alerta
    alert('Haz pasado el mouse sobre el texto');
    console.log('Haz pasado el mouse sobre las palabras');
});