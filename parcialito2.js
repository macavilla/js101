console.log("------------- parcialito2 -------------");
var parametros = process.argv;
var comando = parametros[2];
var primerNum = parametros[3];
var segundoNum = parametros[4];
var resultado;

if (comando="restar") {
resultado = Number(primerNum) - Number(segundoNum);
} else if (comando = "sumar") {
resultado = Number(primerNum) + Number(segundoNum);
}  

console.log("La operación que se solicitó fue " + comando + " \n " 
	+ " El resultado es " + resultado);
