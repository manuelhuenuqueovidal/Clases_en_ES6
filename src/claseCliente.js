//Clase Cliente.
export default class Cliente {
    constructor(nombre, impuesto) {
        this._nombre = nombre;
        this._impuesto = impuesto;
    }
    //Getter nombre.
    get nombre(){
        return this._nombre;
    }
    //Setter nombre.
    set nombre(nuevo_nombre){
        this._nombre = nuevo_nombre;
    }
    //Getter impuesto.
    get impuesto(){
        return this._impuesto;
    }
    //Setter impuesto.
    set impuesto(nuevo_impuesto){
        this._impuesto = nuevo_impuesto;
    }

}



