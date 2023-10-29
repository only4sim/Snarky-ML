function batchNormalization2D(input, scale, shift, epsilon) {
    const [batchSize, inputHeight, inputWidth, inputChannels] = input.shape;

    // Compute the mean and variance across the batch dimension
    const mean = input.mean(0);
    const variance = input.variance(0);

    // Normalize the input using mean and variance
    const normalized = input.sub(mean).div(variance.add(epsilon).sqrt());

    // Apply scaling and shifting
    const scaled = normalized.mul(scale).add(shift);

    return scaled;
}
