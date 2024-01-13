// Creation Date: 2023-10-15
// Last Update: 2023-12-30
// Creator: only4sim
// argMax function for Snarky-ML
// argMax takes a Field array and outputs the positional index of the largest item. The index starts at 0.

import {
    Field,
    Provable,
  } from 'o1js';

export const argMax = (arr: Field[]): Field => {
  let maxIndex = Field(0);
  let maxVal = arr[0];
  for (let i=1; i<arr.length; i++) {
      maxIndex = Provable.if(maxVal.greaterThan(arr[i]), maxIndex, Field(i));
      maxVal = Provable.if(maxVal.greaterThan(arr[i]), maxVal, arr[i]);
  };
  return maxIndex;
};