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

//en typescript se pueden definir tipos de variables
var nombre:string = "Jose Sicajan";
var edad:number = 19;
var programador:boolean = true;
var langs:Array<string> = ["PHP", "Javascript", "Python"];
//con el tipo any nos permite meterle cualquier dato a una variable
var dios:any = 100;
dios = "hola";

etiqueta.innerHTML = dios + " - " + edad;

//diferencia entre let y var

var a = 7;
var b = 12;

if(a == 7){
    // let solo tendra el valor de 4 dentro de este bloque
    let a = 4;
    var b = 1;

    console.log("dentro del if:" + a + " - " + b);
    // a = 4 b = 1
}

console.log("fuera del if:" + a + " - " + b);
// a = 7 b = 1

//funciones y tipado
function devuelve_numero(num:number):string{
    //(num:number):string -> esto obliga a la funcion a devolver siempre un string, y recibir una variable tipo number
    // return num; -> error
    return "Numero enviado a la variable: " + num;
}

function devuelve_string(texto:string):boolean{
    if(texto == "hola"){
        var num = true;
    }else{
        var num = false;
    }
    return num;
}

function devuelve_cualquiertipo(texto:string):any{
    return texto;
}

alert(devuelve_numero(32));
alert(devuelve_string("hola"));
alert(devuelve_cualquiertipo("hello!"));
