// Ejercicio 1: Contador de números del 1 al 10
document.getElementById("contadorIncremental").addEventListener("click", function() {
let contador = 1;
while (contador <= 10) {    
        // Se cumple la condición de salida del bucle
     alert("El contador es: " + contador);
        contador++;
    };
});

//Ejercicio 2: Contador regresivo de 10 a 0
document.getElementById("contadorRegresivo").addEventListener("click", function() {
    let regresion = 10;
while (regresion >= 0) {    
        // Se cumple la condición de salida del bucle
     alert("Hemos disminuido a: " + regresion);
        regresion--;
    };
});

// Ejercicio 3: Cuenta regresiva hasta 0
document.getElementById("cuentaRegresiva").addEventListener("click", function() {
    let numero = prompt("Ingresa tu número para iniciar la cuenta regresiva:");
    numero = Number(numero); // Convertir a número 
while (numero >= 0) {    
        // Se cumple la condición de salida del bucle
     alert("Hemos disminuido a: " + numero);
        numero--;
    };
});

// Ejercicio 4: Cuenta Progresiva desde 0
document.getElementById("cuentaProgresiva").addEventListener("click", function() {
    let numeroIncremental = prompt("Ingresa tu número:");
    numeroIncremental = Number(numeroIncremental); // Convertir a número 
    contador = 0; // Iniciar contador en 0
while (contador <= numeroIncremental) {    
        // Se cumple la condición de salida del bucle
     alert("El contador es: " + contador);
        contador++;
    };
});