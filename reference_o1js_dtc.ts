function predict(sepal_length: Field, sepal_width: Field, petal_length: Field, petal_width: Field): Field {

    let condition1 = petal_length.greaterThan(new Field(245));
    let condition2 = petal_width.greaterThan(new Field(175));
    let condition3 = petal_length.greaterThan(new Field(495));
    let condition4 = petal_width.greaterThan(new Field(165));
    let condition5 = petal_width.greaterThan(new Field(155));
    let condition6 = sepal_length.greaterThan(new Field(695));

    return Circuit.if(condition1,
        Circuit.if(condition2,
            new Field(0), // This case is not in the original code, assuming a default value.
            Circuit.if(condition3,
                Circuit.if(condition4,
                    new Field(2),
                    new Field(1)
                ),
                Circuit.if(condition5,
                    Circuit.if(condition6,
                        new Field(2),
                        new Field(1)
                    ),
                    new Field(2)
                )
            )
        ),
        new Field(0)
    );
}