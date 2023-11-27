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

  const Zelu = ZkProgram({
    name: 'Zelu',
    publicOutput: Field,
  methods: {
    zelu: {
      privateInputs: [Field, Field],
  
      method(input, remainder): Field {
        const n = Field(1000000000); // Assuming n is 10^9
        remainder.assertLessThan(n);
        let tmp = input.square().add(input.mul(n));
        return tmp.sub(remainder).div(n);
    },
  },
  },
  });