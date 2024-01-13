import { Int64, Provable } from 'o1js';
import { conv2D } from '../src/libs/conv2D.js';

describe('conv2D function', () => {
    it('performs convolution correctly with no padding', () => {
        const input = [
            [Int64.from(1), Int64.from(2), Int64.from(3)],
            [Int64.from(4), Int64.from(5), Int64.from(6)],
            [Int64.from(7), Int64.from(8), Int64.from(9)]
        ];
        const kernel = [
            [Int64.from(1), Int64.from(0)],
            [Int64.from(0), Int64.from(-1)]
        ];
        const stride = 1;
        const padding = 'valid';
        const result = conv2D(input, kernel, stride, padding);
        const expected = [
            [Int64.from(-4), Int64.from(-4)],
            [Int64.from(-4), Int64.from(-4)]
        ]; // Convolution result
        expect(result).toEqual(expected);
    });

    it('performs convolution correctly with same padding', () => {
        const input = [
            [Int64.from(1), Int64.from(2), Int64.from(3)],
            [Int64.from(4), Int64.from(5), Int64.from(6)],
            [Int64.from(7), Int64.from(8), Int64.from(9)]
        ];
        const kernel = [
            [Int64.from(1), Int64.from(0)],
            [Int64.from(0), Int64.from(-1)]
        ];
        const stride = 1;
        const padding = 'same';
        const result = conv2D(input, kernel, stride, padding);
        const expected = [
            [Int64.from(-1), Int64.from(-2), Int64.from(-3)],
            [Int64.from(-4), Int64.from(-4), Int64.from(-4)],
            [Int64.from(-7), Int64.from(-4), Int64.from(-4)]
        ]; // Convolution result
        expect(result).toEqual(expected);
    });

    it('handles different stride values correctly', () => {
        const input = [
            [Int64.from(1), Int64.from(2), Int64.from(3), Int64.from(4)],
            [Int64.from(5), Int64.from(6), Int64.from(7), Int64.from(8)],
            [Int64.from(9), Int64.from(10), Int64.from(11), Int64.from(12)],
            [Int64.from(13), Int64.from(14), Int64.from(15), Int64.from(16)]
        ];
        const kernel = [
            [Int64.from(1), Int64.from(0)],
            [Int64.from(0), Int64.from(-1)]
        ];
        const stride = 2;
        const padding = 'valid';
        const result = conv2D(input, kernel, stride, padding);
        const expected = [
            [Int64.from(-5), Int64.from(-5)],
            [Int64.from(-5), Int64.from(-5)]
        ]; // Convolution result
        expect(result).toEqual(expected);
    });
});
