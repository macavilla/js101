console.log("----------------Objetos----------------");
console.log("----------------Ejercicio 1----------------");

var miRecetaMatadora = {
	titulo: "Queso de girasol",
	porciones: 4,
	ingredientes: [
	"semillas de girasol",
	"aceite",
	"limon",
	"ajo",
	"perejil",
	"jengibre"]
};

console.log(miRecetaMatadora);

console.log("----------------Ejercicio 2----------------");

var persona1 = {
	nombre: "Bojack",
	edad: 50,
};

var persona2 = {
	nombre: "Todd",
	edad: 30,
};

var persona3 = {
	nombre: "Hollyhock",
	edad: 18,
};

var usuarios = [
persona1,
persona2,
persona3,
];

console.log("Cantidad de usuarios: " + usuarios.length);
console.log("Edad del usuario 2: " + usuarios[1].edad);
console.log("Nombre del usuario 1: " + usuarios[0].nombre);
