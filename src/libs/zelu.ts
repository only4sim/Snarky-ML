import {
    Int64,
} from 'o1js';

export const zelu =(input: Int64, n: Int64): Int64 =>{
    let tmp = input.mul(input).add(input.mul(n));
    return tmp.div(n);
};
