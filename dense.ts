function dense(input, weights, bias) {
    const [inputSize] = input.shape;
    const [outputSize] = weights.shape;

    // Perform matrix multiplication: output = input * weights
    const output = input.dot(weights);

    // Add the bias vector
    output.add(bias);

    return output;
}
