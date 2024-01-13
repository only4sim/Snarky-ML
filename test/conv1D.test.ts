import { Int64, Provable } from 'o1js';
import { conv1D } from '../src/libs/conv1D.js';

describe('conv1D function', () => {
    it('performs convolution correctly with no padding', () => {
        const input = [Int64.from(1), Int64.from(2), Int64.from(3), Int64.from(4)];
        const kernel = [Int64.from(1), Int64.from(0), Int64.from(-1)];
        const stride = 1;
        const padding = 'valid';
        const result = conv1D(input, kernel, stride, padding);
        const expected = [Int64.from(-2), Int64.from(-2)]; // Convolution result
        expect(result).toEqual(expected);
    });

    it('performs convolution correctly with same padding', () => {
        const input = [Int64.from(1), Int64.from(2), Int64.from(3), Int64.from(4)];
        const kernel = [Int64.from(1), Int64.from(0), Int64.from(-1)];
        const stride = 1;
        const padding = 'same';
        const result = conv1D(input, kernel, stride, padding);
        const expected = [Int64.from(-2), Int64.from(-2), Int64.from(-2), Int64.from(3)]; // Convolution result
        expect(result).toEqual(expected);
    });

    it('handles different stride values correctly', () => {
        const input = [Int64.from(1), Int64.from(2), Int64.from(3), Int64.from(4), Int64.from(5)];
        const kernel = [Int64.from(1), Int64.from(-1)];
        const stride = 2;
        const padding = 'valid';
        const result = conv1D(input, kernel, stride, padding);
        const expected = [Int64.from(-1), Int64.from(-1)]; // Convolution result
        expect(result).toEqual(expected);
    });

});
