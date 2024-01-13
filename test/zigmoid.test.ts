import { Int64 } from 'o1js';
import { zigmoid } from '../src/libs/zigmoid.js';

describe('zigmoid function', () => {
    it('computes zigmoid correctly for specific inputs', () => {
        const input = Int64.from(3);
        const n = Int64.from(1000);
        const result = zigmoid(input, n);
        const expected = Int64.zero;
        expect(result).toEqual(expected);
    });
});
