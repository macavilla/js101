var notaJuan = 8;
var notaPedro = 8;

if (notaPedro>notaJuan) {
	console.log("La mayor nota es " + notaPedro);
} else if (notaJuan > notaPedro) {
	console.log("La mayor nota es " + notaJuan);
} else if (notaPedro == notaJuan) {
	console.log ("Ambos hijos tuvieron la misma nota");
}

console.log("-----------------------------------")

var montoCompra = 200;
var descuento;
var montoFinal;

if (montoCompra > 100) {
	descuento = montoCompra * 15 / 100;
	montoFinal = montoCompra - descuento;

	console.log("Monto a pagar: " + montoCompra + " Descuento: " + descuento + " Monto final: "+ montoFinal);
} else {
	montoFinal = montoCompra;
	console.log("Monto a pagar: " + montoCompra + " Descuento: " + descuento + " Monto final: "+ montoFinal);

}

