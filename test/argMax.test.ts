import {
    Field, Provable,
  } from 'o1js';
import { argMax } from '../src/libs/argMax.js';


describe('argMax function', () => {
  it('performs argMax correctly on a simple array', () => {
      const input = [new Field(5), new Field(8), new Field(2), new Field(10)];
      const result = argMax(input);
      const expected = Field(3);
      expect(result).toEqual(expected);
  });
});
