import { poly } from './poly'; // Import your poly function from your implementation file

describe('poly', () => {
    it('should evaluate a polynomial correctly', () => {
        // Define input, coefficients, and expected output
        const input = 3; // Input value
        const coefficients = [2, 1, 0.5]; // Coefficients for the polynomial 2x^2 + x + 0.5
        const expectedOutput = 19.5; // Expected output for x=3

        // Convert input and coefficients to Fields (assuming you have a way to represent numbers as Fields)
        const inputField = ...; // Convert input to a Field
        const coefficientsField = coefficients.map((c) => ...); // Convert coefficients to Fields

        // Call the poly function
        const result = poly(inputField, coefficientsField);

        // Assert that the result matches the expected output
        expect(result.toNumber()).toEqual(expectedOutput);
    });

    // Add more test cases as needed
});
