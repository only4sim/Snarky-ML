import { flatten2D } from './flatten2D'; // Import your flatten2D function from your implementation file

describe('flatten2D', () => {
    it('should flatten a 2D array correctly', () => {
        // Define input, expected output, and a test case
        const inputMatrix = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ]; // Input 2D array

        const expectedOutput = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Expected output 1D array

        // Convert input to a Field (assuming you have a way to represent arrays as Fields)
        const inputField = ...; // Convert inputMatrix to a Field

        // Call the flatten2D function
        const result = flatten2D(inputField);

        // Assert that the result matches the expected output
        expect(result.toArray()).toEqual(expectedOutput);
    });

    // Add more test cases as needed
});
