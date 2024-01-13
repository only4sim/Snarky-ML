import { Field } from 'o1js';
import { maxPooling2D } from '../src/libs/maxPooling2D.js';

describe('maxPooling2D function', () => {
    it('performs max pooling correctly with pool size 2x2 and stride 2x2', () => {
        const input = [
            [new Field(1), new Field(2), new Field(3), new Field(4)],
            [new Field(5), new Field(6), new Field(7), new Field(8)],
            [new Field(9), new Field(10), new Field(11), new Field(12)],
            [new Field(13), new Field(14), new Field(15), new Field(16)]
        ];
        const poolSize = [2, 2];
        const strides = [2, 2];
        const result = maxPooling2D(input, poolSize, strides);
        const expected = [
            [new Field(6), new Field(8)],
            [new Field(14), new Field(16)]
        ];
        expect(result).toEqual(expected);
    });

    it('handles different stride values correctly', () => {
        const input = [
            [new Field(1), new Field(2), new Field(3)],
            [new Field(4), new Field(5), new Field(6)],
            [new Field(7), new Field(8), new Field(9)]
        ];
        const poolSize = [2, 2];
        const strides = [1, 1];
        const result = maxPooling2D(input, poolSize, strides);
        const expected = [
            [new Field(5), new Field(6)],
            [new Field(8), new Field(9)]
        ];
        expect(result).toEqual(expected);
    });
});
