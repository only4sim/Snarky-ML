import { Field } from 'o1js';
import { dense } from '../src/libs/dense.js';

describe('dense function', () => {
    it('computes matrix-vector multiplication correctly', () => {
        const input = [new Field(1), new Field(2), new Field(3)];
        const weights = [
            [new Field(1), new Field(4)],
            [new Field(2), new Field(5)],
            [new Field(3), new Field(6)]
        ];
        const result = dense(input, weights, null);
        const expected = [
            new Field(14), // 1*1 + 2*2 + 3*3
            new Field(32)  // 1*4 + 2*5 + 3*6
        ];
        expect(result).toEqual(expected);
    });

    it('adds bias correctly', () => {
        const input = [new Field(1), new Field(2), new Field(3)];
        const weights = [
            [new Field(1), new Field(4)],
            [new Field(2), new Field(5)],
            [new Field(3), new Field(6)]
        ];
        const bias = [new Field(1), new Field(-1)];
        const result = dense(input, weights, bias);
        const expected = [
            new Field(15), // 14 + 1
            new Field(31)  // 32 - 1
        ];
        expect(result).toEqual(expected);
    });
});
