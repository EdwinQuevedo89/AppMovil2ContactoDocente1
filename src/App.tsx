// App.tsx
import React from 'react';
import './App.css';

import calculateSquareArea from './squareArea';
import sumArray from './sumArray';
import divideByFive from './divideByFive';
import identifyEvenOdd from './identifyEvenOdd';
import { findLongestString, performOperations } from './processData';
import { Alumno, alumnos, calculateAverageGrade } from './calculateAverageGrade';
import Accumulator from './Accumulator';

const App: React.FC = () => {
    // Ejemplo de uso de las funciones y datos definidos
    console.log('Área de un cuadrado:', calculateSquareArea(4));
    console.log('Suma de un arreglo:', sumArray([1, 2, 3, 4]));
    console.log('Arreglo dividido por 5:', divideByFive([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]));
    console.log('Identificar par o impar:', identifyEvenOdd([1, 2, 3, 4]));
    console.log('Texto más largo:', findLongestString([7, 5, "sistemas", "hola", "adios", 2]));
    console.log('Operaciones matemáticas:', performOperations([7, 5, "sistemas", "hola", "adios", 2]));
    console.log('Promedio de calificaciones:', calculateAverageGrade(alumnos));

    return (
        <div className="App">
            <h1>Tarea de TypeScript en React</h1>

            {/* Componente 1: Calcular área de un cuadrado */}
            <div>
                <h2>Calcular Área de un Cuadrado</h2>
                <p>Ejemplo: Lado del cuadrado = 4</p>
                <p>Área calculada: {calculateSquareArea(4)}</p>
            </div>

            {/* Componente 2: Sumar elementos de un arreglo */}
            <div>
                <h2>Sumar Elementos de un Arreglo</h2>
                <p>Ejemplo: Suma del arreglo [1, 2, 3, 4]</p>
                <p>Resultado: {sumArray([1, 2, 3, 4])}</p>
            </div>

            {/* Componente 3: Dividir elementos de un arreglo por 5 */}
            <div>
                <h2>Dividir Elementos de un Arreglo por 5</h2>
                <p>Ejemplo: Arreglo original [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]</p>
                <p>Resultado: {divideByFive([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]).join(', ')}</p>
            </div>

            {/* Componente 4: Identificar par o impar en un arreglo */}
            <div>
                <h2>Identificar Números Pares o Impares en un Arreglo</h2>
                <p>Ejemplo: Identificar par o impar en el arreglo [1, 2, 3, 4]</p>
                <p>Resultado: {identifyEvenOdd([1, 2, 3, 4]).join(', ')}</p>
            </div>

            {/* Componente 5: Encontrar el texto más largo y realizar operaciones matemáticas */}
            <div>
                <h2>Operaciones con Datos</h2>
                <p>Ejemplo: Arreglo [7, 5, "sistemas", "hola", "adios", 2]</p>
                <p>Texto más largo: {findLongestString([7, 5, "sistemas", "hola", "adios", 2])}</p>
                <p>Operaciones matemáticas: {performOperations([7, 5, "sistemas", "hola", "adios", 2]).join(', ')}</p>
            </div>

            {/* Componente 6: Promedio de calificaciones de alumnos */}
            <div>
             <h2>Promedio de Calificaciones de Alumnos</h2>
                <p>Ejemplo: Calificaciones de los alumnos</p>
                <ul>
                    {alumnos.map(alumno => (
                        <li key={alumno.name}>
                            <strong>{alumno.name}</strong>: {alumno.calificacion}
                        </li>
                    ))}
                </ul>
                <p>Promedio: {calculateAverageGrade(alumnos)}</p>
            </div>

            {/* Componente 7: Acumulador con useState */}
            <div>
                <h2>Acumulador con useState</h2>
                <Accumulator />
            </div>
        </div>
    );
};

export default App;
