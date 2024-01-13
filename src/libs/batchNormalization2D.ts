// Creation Date: 2023-10-15
// Last Update: 2024-01-10
// Creator: only4sim
// batchNormalization2D function for Snarky-ML
// batchNormalization2D takes a 2D Field array, a gamma Field, a beta Field, and an epsilon Field and outputs a 2D Field array.

// TODO: Sqrt of Field is not the same as sqrt of number. Need to implement sqrt of Int64.



import {
    Field,
  } from 'o1js';

  
export const batchNormalization2D = (input: Field[][], gamma: Field, beta: Field, epsilon: Field): Field[][] => {
    const height = input.length;
    const width = input[0].length;

    // Compute mean
    let mean = Field(0);
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
        mean = mean.add(input[y][x]);
        }
    }
    mean = mean.div(height * width);

    // Compute variance
    let variance = Field(0);
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
        let diff = input[y][x].sub(mean);
        variance = variance.add(diff.square());
        }
    }
    variance = variance.div(new Field(height * width));

    // Normalize
    let output = Array(height).fill(0).map(() => Array(width).fill(new Field(0)));
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
        output[y][x] = input[y][x].sub(mean).div(variance.add(epsilon).sqrt()).mul(gamma).add(beta);
        }
    }

    return output;
};
  