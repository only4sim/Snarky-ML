function relu(input) {
    // If input is greater than or equal to zero, return input; otherwise, return zero.
    return input.greaterThanOrEqual(0).ifElse(input, new Field(0));
}
