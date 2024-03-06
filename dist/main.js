"use strict";

var _claseCliente = _interopRequireDefault(require("./claseCliente"));
var _claseImpuestos = _interopRequireDefault(require("./claseImpuestos"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//Importar variables.

//Insatanciar variable impuestos.
var imp = new impuestos(50000, 2000);

//Instanciar variable cliente.
var cl1 = new cliente("Roberto", 10000, imp);

//Ver en consola cliente.
console.log(cl1);

//Ver en consola cálculo de impuesto.
console.log(imp.calcularImpuestos());