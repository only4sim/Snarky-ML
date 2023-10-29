import 'averagePooling2D.ts';

function test_averagePooling2D() {
    // Sample input data (4x4 matrix)
    const input = new Field([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
    ]);

    // Pooling window size and strides
    const poolSize = [2, 2];
    const strides = [2, 2];

    // Expected output data after average pooling
    const expectedOutput = new Field([
        [3.5, 5.5],
        [11.5, 13.5]
    ]);

    // Perform average pooling
    const output = averagePooling2D(input, poolSize, strides);

    // Check if the output matches the expected result
    assert(output.shape[0] === expectedOutput.shape[0], "Output height does not match");
    assert(output.shape[1] === expectedOutput.shape[1], "Output width does not match");

    for (let y = 0; y < output.shape[0]; y++) {
        for (let x = 0; x < output.shape[1]; x++) {
            const actualValue = output.get(y, x);
            const expectedValue = expectedOutput.get(y, x);
            assert(actualValue.equals(expectedValue), `Output value at (${y}, ${x}) does not match`);
        }
    }

    print("Average pooling test passed!");
}

test_averagePooling2D();
