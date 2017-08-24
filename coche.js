var Coche = (function () {
    function Coche() {
    }
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    return Coche;
}());
//instanciamos la clase, creamos el objeto
var coche = new Coche();
var coche_uno = new Coche();
var coche_dos = new Coche();
coche.setColor("negro");
coche_uno.setColor("azul");
coche_dos.setColor("verde");
console.log("El color del coche cero es: " + coche.getColor());
console.log("El color del coche uno es: " + coche_uno.getColor());
console.log("El color del coche dos es: " + coche_dos.getColor());
