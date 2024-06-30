// processData.ts
const findLongestString = (arr: any[]): string => {
    const strings = arr.filter(item => typeof item === 'string') as string[];
    return strings.reduce((a, b) => (a.length > b.length ? a : b), '');
};

const performOperations = (arr: any[]): number[] => {
    const numbers = arr.filter(item => typeof item === 'number') as number[];
    const [a, b, c] = numbers;
    return [
        a + b + c, // Suma
        a - b - c, // Resta
        a * b * c, // Multiplicacion
        a / b / c, // Division
        (a % b) % c // Modulo
    ];
};

export { findLongestString, performOperations };
