// sumArray.ts
const sumArray = (arr: number[]): number => {
    return arr.reduce((acc, curr) => acc + curr, 0);
};

export default sumArray;
