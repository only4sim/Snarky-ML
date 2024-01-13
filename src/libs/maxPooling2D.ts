// Creation Date: 2023-10-15
// Last Update: 2023-12-30
// Creator: only4sim
// maxPooling2D function for Snarky-ML
// maxPooling2D takes a 2D Field array, a poolSize array, and a strides array and outputs a 2D Field array.
// Can only process 2D arrays of Field elements (positive integers)

import { 
    Field,
    Provable, 
} from 'o1js';

export const maxPooling2D = (
    input: Field[][],
    poolSize: number[],
    strides: number[]
): Field[][] => {
    const inputHeight = input.length;
    const inputWidth = input[0].length;
    const [poolHeight, poolWidth] = poolSize;
    const [strideY, strideX] = strides;

    const outputHeight = Math.ceil((inputHeight - poolHeight) / strideY + 1);
    const outputWidth = Math.ceil((inputWidth - poolWidth) / strideX + 1);

    let output = Array(outputHeight).fill(0).map(() => Array(outputWidth).fill(new Field(0)));

    for (let y = 0; y < outputHeight; y++) {
        for (let x = 0; x < outputWidth; x++) {
            let maxVal = new Field(0);

            for (let j = 0; j < poolHeight; j++) {
                for (let i = 0; i < poolWidth; i++) {
                    let inputY = y * strideY + j;
                    let inputX = x * strideX + i;
                    if (inputY < inputHeight && inputX < inputWidth) {
                        maxVal = Provable.if(maxVal.greaterThanOrEqual(input[inputY][inputX]), maxVal, input[inputY][inputX]);
                    }
                }
            }
            output[y][x] = maxVal;
        }
    }

    return output;
};
