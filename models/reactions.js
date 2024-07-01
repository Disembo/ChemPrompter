class Reaction{
    static empty() {
        return new this('',
            [],  // substrates
            [],  // products
            [],  // agents
            []   // conditions
        );
    }

    static fromData(data) {
        let r = Reaction.empty();
        Object.assign(r, data);
        return r;
    }

    toData() {
        return {
            name: this.name,
            substrates: this.substrates,
            products: this.products,
            agents: this.agents,
            conditions: this.conditions
        };
    }
    
    constructor(name, substrates, products, agents, conditions) {
        this.name = name;
        this.substrates = substrates;
        this.products = products;
        this.agents = agents;
        this.conditions = conditions;
    }

    transpose(raw) {
        let transposed = [];
        raw[0]?.forEach((sub, i) => {
            let row = [sub];
            for (let j = 1; j <= 6; ++j)
                row.push(raw[j][i]);
            transposed.push(row);
        });
        return transposed;
    }

    // the input of this method is the dosage of new substrates which determines the dosage of other substances
    newBySubstrates(newSubstrates){
        let ratio = newSubstrates/this.substrates[1][0];
        function multiplyArrayByRatio(array) {
            // Create a new array to hold the multiplied values
            const multipliedArray = [];
            // Iterate through the rows of the original array
            for (let i = 0; i <= 4; i++) {
                const row = array[i];
                let  newRow;
                if (i==0){
                    newRow = array[i];
                    continue;
                }
                else{
                    newRow = []; 
                }
                // Iterate through the elements of each row
                for (let j = 0; j < row.length; j++) {
                    // Multiply each element by the ratio and push to newRow
                    newRow.push(row[j] * ratio);
                }
        
                // Push the newRow to the multipliedArray
                multipliedArray.push(newRow);
            }
            return multipliedArray;
        }

        let ans = {
            Substrates: multiplyArrayByRatio(this.substrates),
            Products: multiplyArrayByRatio(this.products),
            Agents: multiplyArrayByRatio(this.agents)
        };
        return ans;
    }
}

// let silaneSynthesisSubstrates = ['CN(C)c1cccc(Br)c1'];
// let silaneSynthesisProducts = ['CN(C)c2cccc([Si](C)(C)c1cccc(N(C)C)c1)c2'];
// let silaneSynthesisAgents = ['n-BuLi', 'THF','C[Si](C)(Cl)Cl'];
// let silaneSynthesisConditions = ['-78 C to rt'];
// let silaneSynthesisSubstances = {substrates: silaneSynthesisSubstrates, products: silaneSynthesisProducts ,agents: silaneSynthesisAgents};
// let silaneSynthesisDosage = {mass: [1000, 0, 258, 0],volume: [0, 35, 0, 10],mol: [5, 5.5, 2, 0],molecular_mass: [199, 0, 129, 0], concentration: [0,1.6,0,0], eq:[1,1.1, 0.4,0]};
// mass, volume, mole, molecular mass, concentration, equivalence

let silaneSynthesis = Reaction.fromData({
    name: "Silane Synthesis",
    substrates: [
        ['[SMILES]CN(C)c1cccc(Br)c1'],
        [1000],
        [0],
        [5],
        [199],
        [0],
        [1],
    ],
    products: [
        ['[SMILES]CN(C)c2cccc([Si](C)(C)c1cccc(N(C)C)c1)c2'],
        [0],
        [35],
        [5.5],
        [0],
        [1.6],
        [1.1],
    ],
    agents: [
        ['n-BuLi', 'THF', '[SMILES]C[Si](C)(Cl)Cl'],
        [NaN, NaN, NaN],
        [NaN, NaN, NaN],
        [NaN, NaN, NaN],
        [NaN, NaN, NaN],
        [NaN, NaN, NaN],
        [NaN, NaN, NaN],
    ],
    conditions: ['-78 C to rt']
});

let reactions = [
    silaneSynthesis
];

module.exports = { reactions, Reaction };