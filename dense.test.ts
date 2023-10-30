import { dense } from './dense'; // Import your dense function from your implementation file

describe('dense', () => {
    it('should perform dense layer operation correctly', () => {
        // Define input, weights, bias, and expected output
        const input = [1, 2, 3]; // Input vector
        const weights = [
            [0.1, 0.2],
            [0.3, 0.4],
            [0.5, 0.6]
        ]; // Weight matrix
        const bias = [0.7, 0.8]; // Bias vector
        const expectedOutput = [2.3, 3.2]; // Expected output

        // Convert input, weights, and bias to Fields (assuming you have a way to represent arrays as Fields)
        const inputField = ...; // Convert input to a Field
        const weightsField = ...; // Convert weights to a Field
        const biasField = ...; // Convert bias to a Field

        // Call the dense function
        const result = dense(inputField, weightsField, biasField);

        // Assert that the result matches the expected output
        expect(result.toArray()).toEqual(expectedOutput);
    });

    // Add more test cases as needed
});
