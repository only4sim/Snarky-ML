from sklearn.linear_model import LinearRegression

def linear_regression_to_o1js(model, feature_names):
    coef = model.coef_
    intercept = model.intercept_

    feature_names = [f.replace(" ", "_") for f in feature_names]

    print("function predict({}) {{".format(", ".join(feature_names)))
    print("    let result = new Field({});".format(intercept))

    for i, name in enumerate(feature_names):
        print("    result = result.add(new Field({} * {}));".format(coef[i], name))

    print("    return result;")
    print("}")

# Example usage:
# linear_regression_to_o1js(model, feature_names)
