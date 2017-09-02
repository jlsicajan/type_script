class Coche{
    public color: string;
    public modelo: string;
    public velocidad: number;

    constructor($modelo = null){
        //es recomendal e asignarle valores a los atributos en el constructor y no directamente en la variable
        this.velocidad = 0;
        this.color = "Blanco";
        if($modelo == null){
            this.modelo = "BMW GENERICO";
        }else{
            this.modelo = $modelo;
        }
    }
    public getModelo(){
        return this.modelo;
    }

    //va a recibir una variable de tipo string
    public setModelo(modelo: string){
        this.modelo = modelo;
    }

    public getColor(){
        return this.color;
    }

    public setColor(color: string){
        this.color = color;
    }

    public acelerar(){
        this.velocidad++;
    }

    public frenar(){
        this.velocidad--;
    }

    public getVelocidad():number{
        return this.velocidad;
    }

}

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
