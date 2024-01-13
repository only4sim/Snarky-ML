// Creation Date: 2023-10-15
// Last Update: 2023-12-30
// Creator: only4sim
// relu function for Snarky-ML
// relu takes a Field and outputs a Field.

import {
    Provable,
    Int64,
  } from 'o1js';


export const relu = (input: Int64): Int64 => {
      return Provable.if(input.isPositive(), input , Int64.zero);
};