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
