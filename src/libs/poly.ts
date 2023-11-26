import {
    Field,
    Mina,
    PrivateKey,
    AccountUpdate,
    SelfProof,
    ZkProgram,
    Struct,
    Bool,
    Circuit,
    Poseidon,
    MerkleMap,
    MerkleTree,
    MerkleWitness,
    MerkleMapWitness,
    verify,
    Provable,
  } from 'o1js';

const Poly = ZkProgram({
    name: 'Poly',
    publicOutput: Field,
  methods: {
    poly: {
      privateInputs: [Field, Provable.Array(Field, 5)],

      method(input: Field, coefficients: Field[]): Field {
        let result = new Field(0);
        let power = new Field(1);

        for (let i = 0; i < coefficients.length; i++) {
            const term = coefficients[i].mul(power);
            result = result.add(term);
            power = power.mul(input);
        }  
        return result;
    },
  },
},
});

