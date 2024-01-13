import { Field } from 'o1js';
import { flatten2D } from '../src/libs/flatten2D.js';

describe('flatten2D function', () => {
    it('flattens a 2D array into a 1D array correctly', () => {
        const input = [
            [new Field(1), new Field(2)],
            [new Field(3), new Field(4)]
        ];
        const result = flatten2D(input);
        const expected = [new Field(1), new Field(2), new Field(3), new Field(4)];
        expect(result).toEqual(expected);
    });

    it('handles empty arrays correctly', () => {
        const input: Field[][] = [];
        const result = flatten2D(input);
        const expected: Field[] = [];
        expect(result).toEqual(expected);
    });

    it('handles single-element arrays correctly', () => {
        const input = [[new Field(1)]];
        const result = flatten2D(input);
        const expected = [new Field(1)];
        expect(result).toEqual(expected);
    });
});
