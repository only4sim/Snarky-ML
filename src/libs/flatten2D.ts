// Creation Date: 2023-10-15
// Last Update: 2023-12-30
// Creator: only4sim
// flatten2D function for Snarky-ML
// flatten2D takes a 2D Field array and outputs a Field array.

import { Field } from 'o1js';

export const flatten2D = (input: Field[][]): Field[] => {
    const flattened: Field[] = [];
    
    for (const row of input) {
        for (const element of row) {
            flattened.push(element);
        }
    }

    return flattened;
};
