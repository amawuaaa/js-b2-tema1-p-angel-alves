// T1. Uso avanzado de funciones
// U4. Asincronía y await
// Enunciado disponible en u4e1.md / Enunciat disponible a u4e1.md

//Escribe aquí tu solución / escriviu aquí la vostra solució:

async function countDown(amount, stepCallback) {
 
    if (typeof stepCallback !== 'function') {
        throw new Error("ERROR. Es obligatorio el paso de un callback como segundo parámetro.");
    }

    
    console.log(" Iniciando cuenta atrás...");

    
    const esperar = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    for (let i = amount; i >= 0; i--) {
       
        stepCallback(i);
        
        await esperar(1000);
    }
    
    console.log(" ¡Despegue!");
}




const mostrarNumero = (num) => {
    console.log(`> Paso: ${num}`);
};


try {
    
    await countDown(3, mostrarNumero); 
} catch (error) {
    console.error(error.message);
}


console.log("\n--- Probando el error ---");
try {

    await countDown(5, "No soy una función"); 
} catch (error) {
    console.error(" ERROR CAPTURADO:", error.message);
}

/**
* TEST
* This code is ONLY intended for TESTING PURPOSES,
* if you run this code outside of a test environment,
* please comment or remove it (or use it loading the script as
* a module)
*/
export { countDown };
