console.log("Hola, bienvenido al juego de adivinanza de números");
console.log(`Intenta adivinar el número secreto entre 1 y 10. 
    Te divertirás`);

//Variables
let numeroSecreto = 3;
let numeroUsario = prompt("¿Me indicas un número entre 1 y 10, por favor?");

console.log(numeroUsario);
/*
Este código realiza
la comparación
*/
if (numeroUsario == numeroSecreto) {
    //Acertamos, fue verdadera la condición
    alert(`Acertaste el número secreto es: ${numeroUsario} ¡Felicidades!`);
} else {
    //No acertamos, no se cumplió la condición
    alert ("Lo siento, no has acertado el número secreto. Inténtalo de nuevo.");
}