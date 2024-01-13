import { Field } from 'o1js';
import { conv1D } from '../src/libs/conv1D.js';

describe('conv1D function', () => {
    it('performs convolution correctly with no padding', () => {
        const input = [new Field(1), new Field(2), new Field(3), new Field(4)];
        const kernel = [new Field(1), new Field(0), new Field(-1)];
        const stride = 1;
        const padding = 'valid';
        const result = conv1D(input, kernel, stride, padding);
        const expected = [new Field(-1), new Field(-1), new Field(-1)]; // Convolution result
        expect(result).toEqual(expected);
    });

    it('performs convolution correctly with same padding', () => {
        const input = [new Field(1), new Field(2), new Field(3), new Field(4)];
        const kernel = [new Field(1), new Field(0), new Field(-1)];
        const stride = 1;
        const padding = 'same';
        const result = conv1D(input, kernel, stride, padding);
        const expected = [new Field(1), new Field(-1), new Field(-1), new Field(-3)]; // Convolution result
        expect(result).toEqual(expected);
    });

    it('handles different stride values correctly', () => {
        const input = [new Field(1), new Field(2), new Field(3), new Field(4), new Field(5)];
        const kernel = [new Field(1), new Field(-1)];
        const stride = 2;
        const padding = 'valid';
        const result = conv1D(input, kernel, stride, padding);
        const expected = [new Field(1), new Field(1), new Field(1)]; // Convolution result
        expect(result).toEqual(expected);
    });

});
