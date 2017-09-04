console.log("Hola Node.js!");

var parametros = process.argv;
var probandoParametros = parametros[2];

console.log("Hola", probandoParametros);

var nombre1 = process.argv[3];
var nombre2 = process.argv[4];

console.log('Este archivo ha recibido 2 nombres como parámetros de ejecución');
console.log('El primero es', nombre1);
console.log('El segundo es', nombre2);


console.log("----------------------------------------------");

var numeroEnFormatoTexto1 = process.argv[5];
var numeroEnFormatoTexto2 = process.argv[6];


console.log('Los 2 números concatenados:', numeroEnFormatoTexto1 , numeroEnFormatoTexto1);

