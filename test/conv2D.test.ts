import { Field } from 'o1js';
import { conv2D } from '../src/libs/conv2D.js';

describe('conv2D function', () => {
    it('performs convolution correctly with no padding', () => {
        const input = [
            [new Field(1), new Field(2), new Field(3)],
            [new Field(4), new Field(5), new Field(6)],
            [new Field(7), new Field(8), new Field(9)]
        ];
        const kernel = [
            [new Field(1), new Field(0)],
            [new Field(0), new Field(-1)]
        ];
        const stride = 1;
        const padding = 'valid';
        const result = conv2D(input, kernel, stride, padding);
        const expected = [
            [new Field(-4), new Field(-4)],
            [new Field(-4), new Field(-4)]
        ]; // Convolution result
        expect(result).toEqual(expected);
    });

    it('performs convolution correctly with same padding', () => {
        const input = [
            [new Field(1), new Field(2), new Field(3)],
            [new Field(4), new Field(5), new Field(6)],
            [new Field(7), new Field(8), new Field(9)]
        ];
        const kernel = [
            [new Field(1), new Field(0)],
            [new Field(0), new Field(-1)]
        ];
        const stride = 1;
        const padding = 'same';
        const result = conv2D(input, kernel, stride, padding);
        const expected = [
            [new Field(-3), new Field(-4), new Field(-1)],
            [new Field(-4), new Field(-4), new Field(-4)],
            [new Field(3), new Field(4), new Field(1)]
        ]; // Convolution result
        expect(result).toEqual(expected);
    });

    it('handles different stride values correctly', () => {
        const input = [
            [new Field(1), new Field(2), new Field(3), new Field(4)],
            [new Field(5), new Field(6), new Field(7), new Field(8)],
            [new Field(9), new Field(10), new Field(11), new Field(12)],
            [new Field(13), new Field(14), new Field(15), new Field(16)]
        ];
        const kernel = [
            [new Field(1), new Field(0)],
            [new Field(0), new Field(-1)]
        ];
        const stride = 2;
        const padding = 'valid';
        const result = conv2D(input, kernel, stride, padding);
        const expected = [
            [new Field(-8), new Field(-8)],
            [new Field(-8), new Field(-8)]
        ]; // Convolution result
        expect(result).toEqual(expected);
    });
});
