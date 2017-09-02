var Coche = (function () {
    function Coche($modelo) {
        if ($modelo === void 0) { $modelo = null; }
        //es recomendal e asignarle valores a los atributos en el constructor y no directamente en la variable
        this.velocidad = 0;
        this.color = "Blanco";
        if ($modelo == null) {
            this.modelo = "BMW GENERICO";
        }
        else {
            this.modelo = $modelo;
        }
    }
    Coche.prototype.getModelo = function () {
        return this.modelo;
    };
    //va a recibir una variable de tipo string
    Coche.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    Coche.prototype.acelerar = function () {
        this.velocidad++;
    };
    Coche.prototype.frenar = function () {
        this.velocidad--;
    };
    Coche.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    return Coche;
}());
//instanciamos la clase, creamos el objeto
var coche = new Coche("Land rover");
//Land rover llega al constructo, y se lo asigna al modelo
var coche_uno = new Coche();
var coche_dos = new Coche();
coche.setColor("negro");
coche.acelerar();
coche.acelerar();
coche.acelerar();
coche.frenar();
coche_uno.setColor("azul");
coche_dos.setColor("verde");
console.log("El color del coche cero es: " + coche.getColor());
console.log("La velocidad del coche cero es: " + coche.getVelocidad());
console.log("El modelo del coche cero es: " + coche.getModelo());
console.log("El color del coche uno es: " + coche_uno.getColor());
console.log("El color del coche dos es: " + coche_dos.getColor());
