// Creation Date: 2023-10-15
// Last Update: 2024-01-10
// Creator: only4sim
// conv1D function for Snarky-ML
// conv1D takes a Field array, a kernel Field array, a stride number, and a padding string and outputs a Field array.


import { Int64 } from 'o1js';

export const conv1D = (
    input: Int64[],
    kernel: Int64[],
    stride: number,
    padding: 'valid' | 'same'
): Int64[] => {
    const kernelSize = kernel.length;
    let paddedInput = input;

    if (padding === 'same') {
        const padSize = Math.floor(kernelSize / 2);
        const padField = Int64.zero;
        paddedInput = Array(padSize).fill(padField).concat(input).concat(Array(padSize).fill(padField));
    }

    const outputSize = padding === 'valid'
        ? Math.ceil((input.length - kernelSize + 1) / stride)
        : Math.ceil(input.length / stride);

    let output = Array(outputSize).fill(Int64.zero);

    for (let i = 0; i < outputSize; i++) {
        let sum = Int64.zero;
        for (let j = 0; j < kernelSize; j++) {
            sum = sum.add(paddedInput[i * stride + j].mul(kernel[j]));
        }
        output[i] = sum;
    }

    return output;
};
