// Creation Date: 2023-10-15
// Last Update: 2023-12-30
// Creator: only4sim
// poly function for Snarky-ML
// poly takes a Field and a Field array and outputs a Field.


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