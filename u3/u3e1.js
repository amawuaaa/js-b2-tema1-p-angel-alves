// T1. Uso avanzado de funciones
// U3. Promesas
// Enunciado disponible en u3e1.md / Enunciat disponible a u3e1.md

// Escribe aquí tu solución / escriviu aquí la vostra solució:

function getAJoke(callback) {
  
    return fetch("https://geek-jokes.sameerkumar.website/api?format=json")
        .then((respuesta) => {
   
            return respuesta.json();
        })
        .catch((error) => {
            
            callback(error);
        });
}


const miManejadorDeErrores = (err) => {
    console.error("¡Ups! Algo salió mal:", err);
};


console.log("Cargando chiste...");

getAJoke(miManejadorDeErrores).then((datos) => {
    
    if (datos) {
        console.log(" Chiste Geek:", datos.joke);
    }
});

/**
* TEST
* This code is ONLY intended for TESTING PURPOSES,
* if you run this code outside of a test environment,
* please comment or remove it (or use it loading the script as
* a module)
*/
export { getAJoke };
