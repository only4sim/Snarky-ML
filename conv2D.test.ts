import { conv2D } from './conv2D'; // Import your conv2D function from your implementation file

describe('conv2D', () => {
    it('should perform 2D convolution correctly', () => {
        // Define input, kernel, stride, and expected output
        const input = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ];

        const kernel = [
            [0.5, 0.5],
            [0.5, 0.5]
        ];

        const stride = [1, 1];

        const expectedOutput = [
            [4.5, 7.5],
            [13.5, 16.5]
        ];

        // Convert input and kernel to Fields (assuming you have a way to represent arrays as Fields)
        const inputField = ...; // Convert input to a Field
        const kernelField = ...; // Convert kernel to a Field

        // Call the conv2D function
        const result = conv2D(inputField, kernelField, stride);

        // Assert that the result matches the expected output
        expect(result).toEqual(expectedOutput);
    });

    // Add more test cases as needed
});
