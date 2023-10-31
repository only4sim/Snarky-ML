import { relu } from './relu'; // Import your relu function from your implementation file

describe('relu', () => {
    it('should apply ReLU activation correctly for positive input', () => {
        // Define input and expected output for positive input
        const input = 3; // Positive input
        const expectedOutput = 3; // Expected output (same as input)

        // Convert input to a Field (assuming you have a way to represent numbers as Fields)
        const inputField = ...; // Convert input to a Field

        // Call the relu function
        const result = relu(inputField);

        // Assert that the result matches the expected output
        expect(result.toNumber()).toEqual(expectedOutput);
    });

    it('should apply ReLU activation correctly for negative input', () => {
        // Define input and expected output for negative input
        const input = -2; // Negative input
        const expectedOutput = 0; // Expected output (ReLU turns negative input to zero)

        // Convert input to a Field (assuming you have a way to represent numbers as Fields)
        const inputField = ...; // Convert input to a Field

        // Call the relu function
        const result = relu(inputField);

        // Assert that the result matches the expected output
        expect(result.toNumber()).toEqual(expectedOutput);
    });

    // Add more test cases as needed
});
