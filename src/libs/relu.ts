import {
    Provable,
    Int64,
  } from 'o1js';


export const relu = (input: Int64): Int64 => {
      return Provable.if(input.isPositive(), input , Int64.zero);
};