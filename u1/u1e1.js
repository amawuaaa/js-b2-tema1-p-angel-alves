// T1. Uso avanzado de funciones
// U1. Funciones de retorno de llamada: Callbacks
// Enunciado disponible en u1e1.md / Enunciat disponible a u1e1.md

// Escribe aquí tu solución / escriviu aquí la vostra solució:
function conditionalCallback(callback, param){
    if(!param){
        return false;
    }
    return callback(param);
}


const saludar = (nombre) => {
    return "Hola, " + nombre;
};

console.log( "Resultado A (con 0):", conditionalCallback(saludar, 0) );

console.log( "Resultado C (con dato):", conditionalCallback(saludar, "Angel") );
/**
* TEST
* This code is ONLY intended for TESTING PURPOSES,
* if you run this code outside of a test environment,
* please comment or remove it (or use it loading the script as
* a module)
*/
export { conditionalCallback };
