document.getElementById("iniciarDiaSemana").addEventListener("click", function() {
    let diaSemana = prompt("¿Qué día de la semana es hoy?");
    let mensaje = ""
      // Convertir a minúsculas para comparar
    let dia = diaSemana.toLowerCase();

    if (dia == "sábado" || dia == "domingo") {
        mensaje = "Buen fin de semana";
    } else {
        mensaje = "Buen día de trabajo";
    }
    document.body.innerHTML += `<p>${mensaje}</p>`;
});

// Desafío Número positivo o negativo
document.getElementById("iniciarNumero").addEventListener("click", function() {
    let numero = parseInt(prompt("Introduce un número y te diremos si es positivo o negativo:"));
    let mensaje = "";

    // Validar si el número es positivo, negativo o cero
    if (numero > 0) {
        mensaje = "El número es positivo";
    } else if (numero < 0) {
        mensaje = "El número es negativo";
    } else {
        mensaje = "El número es cero";
    }
    document.body.innerHTML += `<p>${mensaje}</p>`;
    });

// Desafío Juego | Puntuación = o + 100
document.getElementById("iniciarJuego").addEventListener("click", function() {
    if (confirm("Bienvenido al juego que probará que tanto sabes de jugos de saludables. Si decides aceptar el reto podrás ver las reglas del juego, si no, da clic en cancelar.")) {
        alert("Reto aceptado");
        window.lastRetoAceptado = true;
    }
    else {
        // El usuario hizo clic en "Cancelar"
        alert("Reto no aceptado");
        window.lastRetoAceptado = false;
    }
    // Mostrar las reglas del juego si el reto fue aceptado
     let reglasDelJuego = "";
     let mensajePuntuacion = "";
     if (window.lastRetoAceptado === true) {
    reglasDelJuego = "1. Debes escoger un jugo saludable \n2. Cada jugo tendrá una puntuación \n3. Si seleccionas los jugos correctos sumarás puntos, si eliges uno incorrecto se restará de la puntuación. \n4. Si llegas a 100 puntos, ganas el juego";
    document.body.innerHTML += `<p>${reglasDelJuego}</p>`;
    let jugoSaludable = prompt("¿Qué jugo saludable quieres escoger? (Naranja, Zanahoria, Betabel, Piña, Pepino, Sandía, Fresa, Pera, Durazno, Mango.)");
    let puntuacion = 100; 
        if (jugoSaludable.toLowerCase() === "naranja" || jugoSaludable.toLowerCase() === "zanahoria" || jugoSaludable.toLowerCase() === "betabel") {
        mensajePuntuacion = `¡Excelente elección! Tu puntuación es: ${puntuacion}, ¡Felicidades ganaste el juego!`; 
    }    else {mensajePuntuacion = "Lo siento, vuelve a intentar";
    };
     } else {
    reglasDelJuego = "Gracias por participar.";
     };   

    document.body.innerHTML += `<p>${mensajePuntuacion}</p>`;
});

// Desafío Juego | Saldo
document.getElementById("Saldo").addEventListener("click", function() {
    let saldo = 1500;
    let mensajeSaldo = `Tu saldo actual es: $${saldo}mx.`
    console.log(mensajeSaldo);
    document.body.innerHTML += `<p>${mensajeSaldo}</p>`;
});

// Desafío | Nombre
    let nombre = prompt("¿Cuál es tu nombre?");
        alert (`¡Hola! ${nombre}.`);

