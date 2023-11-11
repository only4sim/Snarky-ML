function conv1D(input, kernel, stride) {
    const inputLength = input.length;
    const kernelLength = kernel.length;
    const outputLength = Math.floor((inputLength - kernelLength) / stride) + 1;

    const output = new Field(outputLength);

    for (let i = 0; i < outputLength; i++) {
        let sum = new Field(0);
        for (let j = 0; j < kernelLength; j++) {
            const inputIndex = i * stride + j;
            sum = sum.add(input[inputIndex].mul(kernel[j]));
        }
        output[i] = sum;
    }

    return output;
}
