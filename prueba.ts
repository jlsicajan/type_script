//aqui ponemo nuestro codigo typescript o js que al final es lo mismo
function helloWorld(nombre){
    return "Hello World I'm " + nombre;
}

var nombre = "Jose Sicajan";
var resultado = helloWorld(nombre);
//la siguiente linea no funcionara porque no se ha cargado el DOM, a menos de que se carge el script en el html al final
//document.getElementById('container').innerHTML = helloWorld(nombre);

//si se carga el fichero js en el head
var etiqueta = <HTMLElement>document.getElementById('container');
etiqueta.innerHTML = resultado;

alert('hello world');