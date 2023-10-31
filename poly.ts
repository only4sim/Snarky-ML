function poly(input, coefficients) {
    let result = new Field(0);

    for (let i = 0; i < coefficients.length; i++) {
        const term = coefficients[i].mul(input.pow(i));
        result = result.add(term);
    }

    return result;
}
