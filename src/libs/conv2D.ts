// Creation Date: 2023-10-15
// Last Update: 2024-01-10
// Creator: only4sim
// conv2D function for Snarky-ML
// conv2D takes a 2D Field array, a 2D kernel Field array, a stride number, and a padding string and outputs a 2D Field array.

import { Field } from 'o1js';

export const conv2D = (
    input: Field[][],
    kernel: Field[][],
    stride: number,
    padding: 'valid' | 'same'
): Field[][] => {
    const kernelHeight = kernel.length;
    const kernelWidth = kernel[0].length;
    const inputHeight = input.length;
    const inputWidth = input[0].length;

    // Padding calculations
    let paddedInput = input;
    if (padding === 'same') {
        const padHeight = Math.floor(kernelHeight / 2);
        const padWidth = Math.floor(kernelWidth / 2);
        const padField = new Field(0);
        paddedInput = input.map(row => 
            Array(padWidth).fill(padField).concat(row).concat(Array(padWidth).fill(padField))
        );
        const paddedRow = Array(paddedInput[0].length).fill(padField);
        for (let i = 0; i < padHeight; i++) {
            paddedInput.unshift([...paddedRow]);
            paddedInput.push([...paddedRow]);
        }
    }

    // Output dimensions
    const outputHeight = padding === 'valid'
        ? Math.ceil((inputHeight - kernelHeight + 1) / stride)
        : Math.ceil(inputHeight / stride);
    const outputWidth = padding === 'valid'
        ? Math.ceil((inputWidth - kernelWidth + 1) / stride)
        : Math.ceil(inputWidth / stride);

    // Convolution operation
    let output = Array(outputHeight).fill(0).map(() => Array(outputWidth).fill(new Field(0)));
    for (let y = 0; y < outputHeight; y++) {
        for (let x = 0; x < outputWidth; x++) {
            let sum = new Field(0);
            for (let j = 0; j < kernelHeight; j++) {
                for (let i = 0; i < kernelWidth; i++) {
                    let inputY = y * stride + j;
                    let inputX = x * stride + i;
                    sum = sum.add(paddedInput[inputY][inputX].mul(kernel[j][i]));
                }
            }
            output[y][x] = sum;
        }
    }

    return output;
};
