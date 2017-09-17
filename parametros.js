console.log("-------------------Ejercicio 1-----------------");

var miEdad = process.argv[2];
var aniosPerrx= Number(miEdad) *7;

console.log("Mi edad es ", miEdad, " que en años perro son", aniosPerrx);

console.log("-------------------Ejercicio 2-----------------");

var nombre = process.argv[3];
var nota = process.argv[4];


	console.log("Lx alumnx ", nombre, "se sacó un ", nota);
	if (nota >= 7) {
		console.log("Felicitaciones por aprobar");
	} if (nota <= 7 & nota>4) {
		console.log("La próxima entrega espero un mejor trabajo");
	} if (nota<= 4) {
		console.log("Nos vimo' en marzo.")
	}




