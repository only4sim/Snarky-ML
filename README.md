# Snarky-ML: Enable o1js with machine learning capabilities.
Snarky-ML targets the need for enhanced machine-learning functionality within o1js.  

Firstly, Sanrky-ML will first build frequently used libraries needed for ML, such as Conv1D, Poly, ReLU, and this phase will refer to the circomlib-ml standard implementation, and developers will be able to use these libraries to simplify the development of on-chain models in the Mina ecosystem. 

Further, Sanrky-ML will build some templates/translators for representative ML models, such as decision tree, kNN, etc., making it easier for Mina developers to customize their own ML models. This phase will be implemented with reference to keras2circom and ZK-DTP. 

Looking ahead, we will explore more generalized ML model translators as time and resources allow, enabling developers to directly migrate trained Python models to Mina, similar to EZKL. Of course, this part requires huge development resources, which are not included in this proposal, and we will work together with Mina and other stakeholders to push the the process of generalizing the translator. 

Firstly, Sanrky-ML will first build frequently used libraries needed for ML, such as Conv1D, Poly, ReLU, and this phase will refer to the circomlib-ml standard implementation, and developers will be able to use these libraries to simplify the development of on-chain models in the Mina ecosystem. 

Further, Sanrky-ML will build some templates/translators for representative ML models, such as decision tree, kNN, etc., making it easier for Mina developers to customize their own ML models. This phase will be implemented with reference to keras2circom and ZK-DTP. 

Looking ahead, we will explore more generalized ML model translators as time and resources allow, enabling developers to directly migrate trained Python models to Mina, similar to EZKL. Of course, this part requires huge development resources, which are not included in this proposal, and we will work together with Mina and other stakeholders to push the the process of generalizing the translator. 

Proposal Overview
This section provides the key information for understanding your proposal. Electors will be viewing this section when evaluating and scoring your proposal for ‘Impact’ and ‘Scalability & Growth Potential’ (see Cohort 2 Track description for the criteria).

Problem Statement
Currently, SnarkyJS lacks integrated machine learning capabilities, making it challenging for developers to leverage these technologies within their zkApps. The existing ecosystem requires manual integration of machine learning models, leading to a less efficient, time-consuming, and error-prone development process.

Solution
Our project, Snarky-ML, will create a set of machine-learning libraries tailored to o1js, similar to the circomlib-ml. The project will be developed in two stages:

Stage 1 will focus on designing and developing the base machine-learning libraries for o1js. This will set the groundwork for the subsequent stage and provide developers with basic machine-learning capabilities.

Stage 2 will focus on expanding these libraries with specific machine learning model inferences, such as decision trees, linear regression, kNN, random forests, and neural networks.

The project will also include comprehensive documentation, tutorials, and video presentations to assist developers in using the Snarky-ML toolkit.

A potential extension of the project includes exploring the design and implementation of a translator from generic model files, such as ONNX files, to SnarkyJS.

src: This directory contains the source code for your project.

index.ts: This is the entry point for the application.
libs: This directory contains the source code for each of all machine-learning libraries (argMax.ts, averagePooling2D.ts, batchNormalization2D.ts, conv1D.ts, conv2D.ts, dense.ts, flatten2D.ts, maxPooling2D.ts, poly.ts, relu.ts).
models: This directory contains the source code for each of the machine-learning models (decisionTree.ts, linearRegression.ts, kNN.ts, randomForest.ts, neuralNetwork.ts).
test: This directory contains the tests for your project.

libs: This directory contains the tests for each of the machine-learning libraries.
models: This directory contains the tests for each of the machine-learning models.
docs: This directory contains your project's documentation.

gettingStarted.md, apiReference.md: These files contain the documentation for your project.
tutorials: This directory contains tutorial documents.
videos: This directory contains tutorial videos.
The APIs will be designed according to SnarkyJS guidelines. For instance:

// ArgMax API

const argmax = snarkyMl.ArgMax(data)

const result = argmax.compute()

// Conv2D API

const conv2d = snarkyMl.Conv2D(data, filters)

const result = conv2d.compute()

// Dense API

const dense = snarkyMl.Dense(data, weights, biases)

const result = dense.compute()

Architecture & Design
This section provides details about your proposed architecture and project design. Electors will reference this section when evaluating your proposal for the’ Scalability,’ ‘Architecture’ and ‘Feasibility’ criteria.

Architecture
https://docs.google.com/presentation/d/1JOj25RWtgxCUj-LY_iAbX0NXSPMvbJQubHcKKaffcUM/edit?usp=sharing

 

[SnarkyJS] represents the SnarkyJS library that your project is built on.
[ML Libraries] represents the machine learning libraries that you plan to implement.
[ML Models] represents the machine learning models that will use these libraries.
[Test Suite] represents the testing structure that will ensure the correct functionality of the models and libraries.
[Documentation] represents the project's documentation including tutorials and API references.
Each arrow (-->) depicts the interaction between components. For example, [SnarkyJS] enables [ML Libraries], and [ML Libraries] are used by [ML Models].