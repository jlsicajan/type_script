//aqui ponemo nuestro codigo typescript o js que al final es lo mismo
function helloWorld(nombre) {
    return "Hello World I'm " + nombre;
}
var nombre = "Jose Sicajan";
var resultado = helloWorld(nombre);
//la siguiente linea no funcionara porque no se ha cargado el DOM, a menos de que se carge el script en el html al final
//document.getElementById('container').innerHTML = helloWorld(nombre);
//si se carga el fichero js en el head
var etiqueta = document.getElementById('container');
etiqueta.innerHTML = resultado;
//en typescript se pueden definir tipos de variables
var nombre = "Jose Sicajan";
var edad = 19;
var programador = true;
var langs = ["PHP", "Javascript", "Python"];
//con el tipo any nos permite meterle cualquier dato a una variable
var dios = 100;
dios = "hola";
etiqueta.innerHTML = dios + " - " + edad;
alert('hello world');
