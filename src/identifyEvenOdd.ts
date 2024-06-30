// identifyEvenOdd.ts

export {};

const identifyEvenOdd = (arr: number[]): string[] => {
    return arr.map(num => (num % 2 === 0 ? 'par' : 'impar'));
};

export default identifyEvenOdd;
