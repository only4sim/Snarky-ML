function flatten2D(input) {
    const [rows, cols] = input.shape;
    const output = new Field(rows * cols);

    let index = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            output.set(index, input.get(i, j));
            index++;
        }
    }

    return output;
}

const inputMatrix = new Field([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]);

const flattenedArray = flatten2D(inputMatrix);

// flattenedArray should contain [1, 2, 3, 4, 5, 6, 7, 8, 9]
