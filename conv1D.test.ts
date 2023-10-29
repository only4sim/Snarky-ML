import { conv1D } from './conv1D'; // Import your conv1D function from your implementation file

describe('conv1D', () => {
    it('should perform 1D convolution correctly', () => {
        // Define input, kernel, and expected output
        const input = [1, 2, 3, 4, 5];
        const kernel = [0.5, 0.25];
        const stride = 1;
        const expectedOutput = [0.5, 1.25, 2.25, 3.25, 4.25];

        // Call the conv1D function
        const result = conv1D(input, kernel, stride);

        // Assert that the result matches the expected output
        expect(result).toEqual(expectedOutput);
    });

    // Add more test cases as needed
});
