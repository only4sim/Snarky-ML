import { Field } from 'o1js';
import { batchNormalization2D } from '../src/libs/batchNormalization2D.js';

// describe('batchNormalization2D function', () => {
//     it('normalizes a simple matrix correctly', () => {
//         const input = [
//             [new Field(1), new Field(2)],
//             [new Field(3), new Field(4)]
//         ];
//         const gamma = new Field(1);
//         const beta = new Field(0);
//         const epsilon = 1e-5;
//         const result = batchNormalization2D(input, gamma, beta, Field(epsilon));

//         const mean = (1 + 2 + 3 + 4) / 4;
//         const variance = (((1 - mean) ** 2) + ((2 - mean) ** 2) + ((3 - mean) ** 2) + ((4 - mean) ** 2)) / 4;
//         const expected = [
//             [new Field((1 - mean) / Math.sqrt(variance + epsilon)), new Field((2 - mean) / Math.sqrt(variance + epsilon))],
//             [new Field((3 - mean) / Math.sqrt(variance + epsilon)), new Field((4 - mean) / Math.sqrt(variance + epsilon))]
//         ];
//         expect(result).toEqual(expected);
//     });


//     it('applies scale and shift correctly', () => {
//         const input = [
//             [new Field(1), new Field(2)],
//             [new Field(3), new Field(4)]
//         ];
//         const gamma = new Field(2);
//         const beta = new Field(5);
//         const epsilon = 1e-5;
//         const result = batchNormalization2D(input, gamma, beta, Field(1).div(100000));

//         const mean = (1 + 2 + 3 + 4) / 4;
//         const variance = (((1 - mean) ** 2) + ((2 - mean) ** 2) + ((3 - mean) ** 2) + ((4 - mean) ** 2)) / 4;
//         const expected = [
//             [new Field(5 + 2 * (1 - mean) / Math.sqrt(variance + epsilon)), new Field(5 + 2 * (2 - mean) / Math.sqrt(variance + epsilon))],
//             [new Field(5 + 2 * (3 - mean) / Math.sqrt(variance + epsilon)), new Field(5 + 2 * (4 - mean) / Math.sqrt(variance + epsilon))]
//         ];
//         expect(result).toEqual(expected);
//     });
// });

describe('batchNormalization2D function', () => {
    it('empty test for normalizing a simple matrix correctly', () => {
        const input = [
            [new Field(1), new Field(2)],
            [new Field(3), new Field(4)]
        ];
        // const gamma = new Field(1);
        // const beta = new Field(0);
        // const epsilon = 0;
        // const result = batchNormalization2D(input, gamma, beta, Field(epsilon));

        // const mean = (1 + 2 + 3 + 4) / 4;
        // const variance = (((1 - mean) ** 2) + ((2 - mean) ** 2) + ((3 - mean) ** 2) + ((4 - mean) ** 2)) / 4;
        // const expected = [
        //     [new Field((1 - mean) / Math.sqrt(variance + epsilon)), new Field((2 - mean) / Math.sqrt(variance + epsilon))],
        //     [new Field((3 - mean) / Math.sqrt(variance + epsilon)), new Field((4 - mean) / Math.sqrt(variance + epsilon))]
        // ];
        // expect(result).toEqual(expected);
    });

});