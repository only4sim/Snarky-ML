import { Int64 } from 'o1js';
import { zelu } from '../src/libs/zelu.js';

describe('zelu function', () => {
    it('computes zelu correctly for positive input', () => {
        const input = Int64.from(3);
        const n = Int64.from(2);
        const result = zelu(input, n);
        const expected = Int64.from(Math.floor((3 * 3 + 3 * 2) / 2)); // (9 + 6) / 2
        expect(result).toEqual(expected);
    });

    it('computes zelu correctly for negative input', () => {
        const input = Int64.from(-2);
        const n = Int64.from(4);
        const result = zelu(input, n);
        const expected = Int64.from(Math.floor((-2 * -2 + -2 * 4) / 4)); // (4 - 8) / 4
        expect(result).toEqual(expected);
    });

    it('handles zero input correctly', () => {
        const input = Int64.zero;
        const n = Int64.from(5);
        const result = zelu(input, n);
        const expected = Int64.from(0); // (0 * 0 + 0 * 5) / 5
        expect(result).toEqual(expected);
    });
});
