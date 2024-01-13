import { Field } from 'o1js';

export const dense = (
    input: Field[],
    weights: Field[][],
    bias: Field[] | null
): Field[] => {
    const outputLength = weights[0].length;
    let output = Array(outputLength).fill(new Field(0));

    // Matrix-vector multiplication
    for (let i = 0; i < outputLength; i++) {
        let sum = new Field(0);
        for (let j = 0; j < input.length; j++) {
            sum = sum.add(weights[j][i].mul(input[j]));
        }
        output[i] = sum;
    }

    // Adding bias if provided
    if (bias) {
        output = output.map((value, index) => value.add(bias[index]));
    }

    return output;
};
