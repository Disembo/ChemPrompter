class Reaction{
    constructor(name, substances, conditions, dosage) {
        this.name = name;
        this.substrates = substances.substrates;
        this.products = substances.products;
        this.agents = substances.agents;
        this.conditions = conditions;
        this.dosage = dosage;
    }

// the input of this method is the dosage of new substrates which determines the dosage of other substances
    new(newSubstrates){
        let ratio = newSubstrates/this.dosage.mass[0];
        function multiplyByRatio(arr) {
            // Using Array.map() to create a new array with modified elements
            let multipliedArray = arr.map(function(element) {
                return element * ratio;
            });
            return multipliedArray;
        }
        let m = multiplyByRatio(this.dosage.mass);
        let v = multiplyByRatio(this.dosage.volume);
        let n = multiplyByRatio(this.dosage.mol);
        let e = multiplyByRatio(this.dosage.eq); 
        let ans = {mass:m, volume:v, mol:n, molecular_mass: this.dosage.molecular_mass, concentration:this.dosage.concentration, eq:e}
        return ans;
    }
}


let silaneSynthesisSubstrates = ['CN(C)c1cccc(Br)c1'];
let silaneSynthesisProducts = ['CN(C)c2cccc([Si](C)(C)c1cccc(N(C)C)c1)c2'];
let silaneSynthesisAgents = ['n-BuLi', 'THF','C[Si](C)(Cl)Cl'];
let silaneSynthesisConditions = ['-78 C to rt'];
let silaneSynthesisSubstances = {substrates: silaneSynthesisSubstrates, products: silaneSynthesisProducts ,agents: silaneSynthesisAgents};
let silaneSynthesisDosage = {mass: [1000, 0, 258, 0],volume: [0, 35, 0, 10],mol: [5, 5.5, 2, 0],molecular_mass: [199, 0, 129, 0], concentration: [0,1.6,0,0], eq:[1,1.1, 0.4,0]};
// mass, volume, mole, molecular mass, concentration, equivalence


let silaneSynthesis = new Reaction("Silane Synthesis", silaneSynthesisSubstances, silaneSynthesisConditions, silaneSynthesisDosage);
console.log(silaneSynthesis);

console.log(silaneSynthesis.new(2000))

let reactions = [
    silaneSynthesis,
    silaneSynthesis,
    silaneSynthesis,
    silaneSynthesis,
];