alert ("Hola, bienvenido al juego de adivinanza de números");
alert (`Intenta adivinar el número secreto entre 1 y 10. 
    Te divertirás mucho.`);

//Variables
let numeroSecreto = 5;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = "vez";
while (numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt("¿Me indicas un número entre 1 y 10, por favor?");

    // Mostrar el número ingresado por el usuario en la consola
    console.log("Número ingresado por el usuario: " + numeroUsuario);
    console.log(numeroUsuario);
    /*
    Este código realiza
    la comparación
    */
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste el número secreto es: ${numeroUsuario}. Lo hiciste en ${intentos} ${palabraVeces}. ¡Felicidades!`);
    } else {
        if(numeroUsuario > numeroSecreto) {
            alert("El número secreto es menor");
        } else {
            alert("El número secreto es mayor");
        }
        //Incrementamos el contador cuando no acierta
        intentos = intentos + 1;
        palabraVeces = "veces";
        if (intentos > 3) {
            alert("Llegaste al número máximo de intentos");
            break; // Salimos del bucle si se superan los intentos
        }
        //No acertamos, no se cumplió la condición
        //alert ("Lo siento, no has acertado el número secreto. Inténtalo de nuevo.");
    }
}