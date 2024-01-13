// Creation Date: 2023-10-15
// Last Update: 2023-12-30
// Creator: only4sim
// zelu function for Snarky-ML
// zelu takes a Field and a Field and outputs a Field.

import {
    Int64,
} from 'o1js';

export const zelu =(input: Int64, n: Int64): Int64 =>{
    let tmp = input.mul(input).add(input.mul(n));
    return tmp.div(n);
};
