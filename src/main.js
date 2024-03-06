//Importar variables.
import Cliente from "./claseCliente.js";
import Impuestos from "./claseImpuestos.js";

//Insatanciar variable impuestos.
let imp = new Impuestos(50000, 2000);


//Instanciar variable cliente.
let cl1 = new Cliente("Roberto", 10000, imp);

//Ver en consola cliente.
console.log(cl1.nombre);

//Ver en consola cálculo de impuesto.
console.log("El cálculo de impuestos es de: " + imp.calcularImpuestos() + " pesos.");


