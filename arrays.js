var meses = [
    'Enero', // índice `0`
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'  // índice 11, equivalente a `meses.length - 1`
];

console.log("Ejercicio 1:")
var mesDeCumpleanios = 1;
console.log('El mes de mi cumple: ' + meses[mesDeCumpleanios - 1]);
console.log("-------------------------------------------------------")


console.log("Ejercicio 2:")
var planetas = [
    'Mercurio',
    'Venus',
    'Tierra',
    'Marte',
    'Saturno',
    'Jupiter',
    'Urano',
    'Neptuno',
    'Plutón'
];

console.log("Cantidad de meses: " + meses.length);
console.log("Cantidad de planetas: " + planetas.length);
console.log("Ultimo elemento de meses: " + meses[meses.length-1]);
console.log("Ultimo elemento de planetas: " + planetas[planetas.length-1]);
console.log("Cuarto elemento de planetas: " + planetas[3]);
console.log("-------------------------------------------------------")



console.log("Ejercicio 3:")

var corredores = [
    'Margarita', // ganó la carrera
    'Juan',
    'Raquel',
    'Ezequiel',
    'Gonzalo',
    'Martina',
    'Julian' // último 🙁
];

console.log("Ganadorxs: " + corredores[0] +" - "+ corredores[1]+" - " + corredores[2]);
var losUltimos = [
    corredores[corredores.length-1], 
    corredores[corredores.length-2]
];

console.log("SHAME SHAME SHAME a los loosers: " + losUltimos);