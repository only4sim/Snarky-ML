import { Int64 } from 'o1js';
import { averagePooling2D } from '../src/libs/averagePooling2D.js';

describe('averagePooling2D function', () => {
    it('performs average pooling correctly on a simple matrix', () => {
        const input = [
            [Int64.from(1), Int64.from(2)],
            [Int64.from(3), Int64.from(4)]
        ];
        const poolSize = [2, 2];
        const strides = [1, 1];
        const result = averagePooling2D(input, poolSize, strides);
        const expected = [[Int64.from(2)]];
        expect(result).toEqual(expected);
    });

    it('handles non-square pooling regions correctly', () => {
        const input = [
            [Int64.from(1), Int64.from(2), Int64.from(3)],
            [Int64.from(4), Int64.from(5), Int64.from(6)],
            [Int64.from(7), Int64.from(8), Int64.from(9)]
        ];
        const poolSize = [2, 2];
        const strides = [1, 1];
        const result = averagePooling2D(input, poolSize, strides);
        const expected = [
            [Int64.from(3), Int64.from(4)],
            [Int64.from(6), Int64.from(7)]
        ];
        expect(result).toEqual(expected);
    });

    it('handles different stride values correctly', () => {
        const input = [
            [Int64.from(1), Int64.from(2), Int64.from(3), Int64.from(4)],
            [Int64.from(5), Int64.from(6), Int64.from(7), Int64.from(8)],
            [Int64.from(9), Int64.from(10), Int64.from(11), Int64.from(12)]
        ];
        const poolSize = [2, 2];
        const strides = [2, 2];
        const result = averagePooling2D(input, poolSize, strides);
        const expected = [
            [Int64.from(3), Int64.from(5)],
            [Int64.from(9), Int64.from(11)]
        ];
        expect(result).toEqual(expected);
    });
});
