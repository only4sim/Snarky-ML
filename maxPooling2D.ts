function maxPooling2D(input, poolSize, strides) {
    const [inputHeight, inputWidth] = input.shape;
    const [poolHeight, poolWidth] = poolSize;
    const [strideHeight, strideWidth] = strides;
    const outputHeight = Math.floor((inputHeight - poolHeight) / strideHeight) + 1;
    const outputWidth = Math.floor((inputWidth - poolWidth) / strideWidth) + 1;

    const output = new Field(outputHeight, outputWidth);

    for (let i = 0; i < outputHeight; i++) {
        for (let j = 0; j < outputWidth; j++) {
            let maxVal = new Field(Number.NEGATIVE_INFINITY);

            for (let m = 0; m < poolHeight; m++) {
                for (let n = 0; n < poolWidth; n++) {
                    const inputY = i * strideHeight + m;
                    const inputX = j * strideWidth + n;
                    const value = input.get(inputY, inputX);
                    maxVal = maxVal.max(value);
                }
            }

            output.set(i, j, maxVal);
        }
    }

    return output;
}
