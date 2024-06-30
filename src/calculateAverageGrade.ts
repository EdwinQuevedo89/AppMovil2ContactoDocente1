// calculateAverageGrade.ts
interface Alumno {
    name: string;
    edad: number;
    calificacion: number;
}

const alumnos: Alumno[] = [
    { name: "Viviana", edad: 19, calificacion: 10 },
    { name: "Wendy", edad: 20, calificacion: 8 },
    { name: "Gerson", edad: 18, calificacion: 9 }
];

const calculateAverageGrade = (students: Alumno[]): number => {
    const total = students.reduce((acc, curr) => acc + curr.calificacion, 0);
    return total / students.length;
};

export type { Alumno }; // Exportar el tipo Alumno
export { alumnos, calculateAverageGrade }; // Re-exportar las constantes y la función
