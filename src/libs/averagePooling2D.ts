// Creation Date: 2023-10-15
// Last Update: 2023-12-30
// Creator: only4sim
// averagePooling2D function for Snarky-ML
// averagePooling2D takes a 2D Field array, a poolSize array, and a strides array and outputs a 2D Field array.


import {
    Int64,
  } from 'o1js';


export const averagePooling2D = (input: Int64 [][], poolSize: number [], strides : number []): Int64 [][] => {
    const inputHeight = input.length;
    const inputWidth = input[0].length;
    const [poolHeight, poolWidth] = poolSize;
    const [strideY, strideX] = strides;

    const outputHeight = Math.floor((inputHeight-poolHeight) / strideY) + 1;
    const outputWidth = Math.floor((inputWidth - poolWidth) / strideX) + 1;

    let output = Array(outputHeight).fill(0).map(() => Array(outputWidth).fill(0));
    // let output = Provable.Array(Provable.Array(Field, outputWidth), outputHeight);

    for (let y = 0; y < outputHeight; y++) {
        for (let x = 0; x < outputWidth; x++) {
            let sum = Int64.zero;
            for (let j = 0; j < poolHeight; j++) {
                for (let i = 0; i < poolWidth; i++) {
                    let inputY = y * strideY + j;
                    let inputX = x * strideX + i;
                    sum = sum.add(input[inputY][inputX]);
                }
            }
            output[y][x] = sum.div(poolHeight * poolWidth)
        }
    }

    return output;
}
