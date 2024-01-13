import {
    Field,
  } from 'o1js';

export const poly = (input: Field, coefficients: Field[]):Field => {
    let result = new Field(0);
    let power = new Field(1);

    for (let i = 0; i < coefficients.length; i++) {
        const term = coefficients[i].mul(power);
        result = result.add(term);
        power = power.mul(input);
    }  
    return result;
}