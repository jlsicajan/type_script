class Coche{
    public color: string;
    public modelo: string;
    public velocidad: number;

    public getColor(){
        return this.color;
    }

    public setColor(color: string){
        this.color = color;
    }

}

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
