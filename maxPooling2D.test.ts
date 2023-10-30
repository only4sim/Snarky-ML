import { maxPooling2D } from './maxPooling2D'; // Import your maxPooling2D function from your implementation file

describe('maxPooling2D', () => {
    it('should perform 2D max pooling correctly', () => {
        // Define input, pool size, strides, and expected output
        const inputMatrix = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16]
        ]; // Input 2D array

        const poolSize = [2, 2]; // Pool size
        const strides = [2, 2]; // Strides
        const expectedOutput = [
            [6, 8],
            [14, 16]
        ]; // Expected output

        // Convert input to a Field (assuming you have a way to represent arrays as Fields)
        const inputField = ...; // Convert inputMatrix to a Field

        // Call the maxPooling2D function
        const result = maxPooling2D(inputField, poolSize, strides);

        // Assert that the result matches the expected output
        expect(result.toArray()).toEqual(expectedOutput);
    });

    // Add more test cases as needed
});
