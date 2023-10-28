from sklearn.ensemble import RandomForestClassifier

def random_forest_classifier_to_o1js(model, feature_names):
    for i, estimator in enumerate(model.estimators_):
        print("function tree_{}({}) {{".format(i, ", ".join(feature_names)))
        tree_to_o1js(estimator, feature_names)
        print("}")

    print("function predict({}) {{".format(", ".join(feature_names)))
    print("    let result = 0;")

    for i, _ in enumerate(model.estimators_):
        print("    result = result.add(tree_{}({}));".format(i, ", ".join(feature_names)))

    print("    return new Bool(result.greaterThan({}));".format(len(model.estimators_) // 2))
    print("}")

# Example usage:
# random_forest_classifier_to_o1js(model, feature_names)
