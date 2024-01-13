import { Int64, Provable } from 'o1js';
import { relu } from '../src/libs/relu.js';

describe('relu function', () => {
    it('returns the input when the input is positive', () => {
        const input = Int64.from(5);
        const result = relu(input);
        expect(result).toEqual(input);
    });

    it('returns zero when the input is zero', () => {
        const input = Int64.zero;
        const result = relu(input);
        expect(result).toEqual(Int64.zero);
    });

    it('returns zero when the input is negative', () => {
        const input = Int64.from(-3);
        const result = relu(input);
        expect(result).toEqual(Int64.zero);
    });
});
