function conv2D(input, kernel, stride) {
    const [inputHeight, inputWidth] = input.shape;
    const [kernelHeight, kernelWidth] = kernel.shape;
    const outputHeight = Math.floor((inputHeight - kernelHeight) / stride[0]) + 1;
    const outputWidth = Math.floor((inputWidth - kernelWidth) / stride[1]) + 1;

    const output = new Field(outputHeight, outputWidth);

    for (let i = 0; i < outputHeight; i++) {
        for (let j = 0; j < outputWidth; j++) {
            let sum = new Field(0);
            for (let m = 0; m < kernelHeight; m++) {
                for (let n = 0; n < kernelWidth; n++) {
                    const inputY = i * stride[0] + m;
                    const inputX = j * stride[1] + n;
                    sum = sum.add(input.get(inputY, inputX).mul(kernel.get(m, n)));
                }
            }
            output.set(i, j, sum);
        }
    }

    return output;
}
