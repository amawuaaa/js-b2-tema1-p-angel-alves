// T1. Uso avanzado de funciones
// U2. Métodos reduce y forEach
// Enunciado disponible en u2e1.md / Enunciat disponible a u2e1.md

// Escribe aquí tu solución / escriviu aquí la vostra solució:
class ClassroomReport {
    #studentList; // Propiedad privada

    constructor(studentList = []) {
        this.#studentList = studentList;
    }

    // Getter y Setter
    get studentList() { return this.#studentList; }
    set studentList(newList) { this.#studentList = newList; }

    // Método para contar estudiantes usando REDUCE
    getStudentsNumber(excludeInactive = true) {
        return this.#studentList.reduce((acc, student) => {
            if (excludeInactive && !student.active) return acc;
            return acc + 1;
        }, 0);
    }

    // Método para la nota media usando REDUCE
    averageScore(excludeInactive = true) {
        const targetStudents = this.#studentList.filter(s => !(excludeInactive && !s.active));
        if (targetStudents.length === 0) return 0;
        const sum = targetStudents.reduce((acc, s) => acc + s.score, 0);
        return sum / targetStudents.length;
    }

    // Método para el mejor estudiante usando FOREACH
    bestStudent(excludeInactive = true) {
        let best = null;
        this.#studentList.forEach(student => {
            if (excludeInactive && !student.active) return;
            if (!best || student.score >= best.score) best = student;
        });
        return best;
    }

    // Método para aprobados usando REDUCE
    passedCount(excludeInactive = true) {
        return this.#studentList.reduce((acc, student) => {
            if (excludeInactive && !student.active) return acc;
            return student.score >= 5 ? acc + 1 : acc;
        }, 0);
    }
}

// --- ZONA DE PRUEBAS ---
const alumnos = [
    { id: 1, active: true, score: 7 },
    { id: 2, active: false, score: 9 },
    { id: 3, active: true, score: 4 },
    { id: 4, active: true, score: 10 }
];

const miClase = new ClassroomReport(alumnos);

console.log("--- RESULTADOS DEL EXAMEN ---");
console.log("Total alumnos (sin contar inactivos):", miClase.getStudentsNumber(true));
console.log("Nota media (sin inactivos):", miClase.averageScore(true));
console.log("¿Quién es el mejor?", miClase.bestStudent(true));
console.log("¿Cuántos han aprobado?", miClase.passedCount(true));
/**
* TEST
* This code is ONLY intended for TESTING PURPOSES,
* if you run this code outside of a test environment,
* please comment or remove it (or use it loading the script as
* a module)
*/
export { ClassroomReport };
