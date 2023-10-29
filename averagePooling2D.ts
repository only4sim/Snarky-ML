function averagePooling2D(input, poolSize, strides) {
    const [inputHeight, inputWidth] = input.shape;
    const [poolHeight, poolWidth] = poolSize;
    const [strideY, strideX] = strides;

    const outputHeight = Math.floor((inputHeight - poolHeight) / strideY) + 1;
    const outputWidth = Math.floor((inputWidth - poolWidth) / strideX) + 1;

    const output = new Field(outputHeight, outputWidth);

    for (let y = 0; y < outputHeight; y++) {
        for (let x = 0; x < outputWidth; x++) {
            let sum = new Field(0);
            for (let j = 0; j < poolHeight; j++) {
                for (let i = 0; i < poolWidth; i++) {
                    const inputY = y * strideY + j;
                    const inputX = x * strideX + i;
                    sum = sum.add(input.get(inputY, inputX));
                }
            }
            output.set(y, x, sum.div(poolHeight * poolWidth));
        }
    }

    return output;
}
