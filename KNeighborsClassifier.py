import numpy as np
from sklearn.neighbors import KNeighborsClassifier

# Sample kNN model and data
X_train = np.array([[1, 2], [2, 3], [3, 4], [4, 5]])
y_train = np.array([0, 0, 1, 1])
knn = KNeighborsClassifier(n_neighbors=3)
knn.fit(X_train, y_train)

# Translating kNN predictions to o1js
def knn_to_o1js(model, feature_names):
    def euclidean_distance(a, b):
        return np.sqrt(np.sum((a - b) ** 2))

    def predict_knn(input_data):
        distances = []

        for i in range(len(X_train)):
            dist = euclidean_distance(input_data, X_train[i])
            distances.append((dist, y_train[i]))

        distances.sort(key=lambda x: x[0])
        nearest_neighbors = distances[:model.n_neighbors]

        # Count the class labels of the nearest neighbors
        class_counts = [0] * len(np.unique(y_train))
        for neighbor in nearest_neighbors:
            class_counts[neighbor[1]] += 1

        # Predict the class label with the most votes
        return np.argmax(class_counts)

    print("function predict_knn({}) {{".format(", ".join(feature_names)))
    print("    let input_data = [{}];".format(", ".join(feature_names)))
    print("    return predict_knn(input_data);")
    print("}")

# Example usage:
feature_names = ["feature1", "feature2"]
knn_to_o1js(knn, feature_names)
