import 'batchNormalization2D.ts';

function test_batchNormalization2D() {
    // Generate sample input data (batchSize x height x width x channels)
    const batchSize = 2;
    const height = 3;
    const width = 3;
    const channels = 2;
    const epsilon = 1e-5;

    const input = new Field(batchSize, height, width, channels);
    // Initialize input with your data (e.g., random values)

    // Generate sample scale and shift values (for each channel)
    const scale = new Field(channels);
    const shift = new Field(channels);
    // Initialize scale and shift with your values (e.g., random values)

    // Perform batch normalization
    const normalized = batchNormalization2D(input, scale, shift, epsilon);

    // Check if the output shape matches the input shape
    assert(normalized.shape[0] === batchSize, "Batch size does not match");
    assert(normalized.shape[1] === height, "Height does not match");
    assert(normalized.shape[2] === width, "Width does not match");
    assert(normalized.shape[3] === channels, "Number of channels does not match");

    // Perform additional checks if desired, such as mean and variance calculations

    // Print a message if the test passes
    print("Batch normalization test passed!");
}

test_batchNormalization2D();
