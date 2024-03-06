//Clase impuestos.
export default class Impuestos {
    constructor(montoBrutoAnual, deducciones) {
        this._montoBrutoAnual = montoBrutoAnual;
        this._deducciones = deducciones;
    }
    //Getter montoBrutoAnual.
    get montoBrutoAnual(){
        return this._montoBrutoAnual;
    }
    //Setter montoBrutoAnual.
    set montoBrutoAnual(nuevo_monto){
        this._montoBrutoAnual = nuevo_monto;
    }
    //Getter deducciones. 
    get deducciones(){
        return this._deducciones;
    }
    //Setter deducciones.
    set deducciones(nueva_deduccion){
        this._deducciones = nueva_deduccion
    }
    //Calculo Impuetos.
    calcularImpuestos(){
        return ((this.montoBrutoAnual - this.deducciones) * 0.21);
    }

   
}






