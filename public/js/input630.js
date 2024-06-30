substrates = [];
products = [];
agents = [];


let jsmeApplet;
function jsmeOnLoad() {
    jsmeApplet = new JSApplet.JSME("jsme_container", "380px", "340px", { options: "newlook" });
}
function getSmiles() {
    let smiles = jsmeApplet.smiles();
    //alert (smiles);
    return smiles;
    //document.getElementById('output').textContent = 'SMILES: ' + smiles;
}

function addSubstrates(){
    smiles = getSmiles()
    alert (smiles)
    //console.log(smiles)
    substrates.push(getSmiles())
}
function addProducts(){
    smiles = getSmiles()
    alert (smiles)
    //console.log(smiles)
    products.push(getSmiles())
}
function addAgents(){
    smiles = getSmiles()
    alert (smiles)
    //console.log(smiles)
    agents.push(getSmiles())
}
function finish(){
    alert (substrates)
    alert (products)
    alert (agents)
    console.log(substrates)
    console.log(products)
    console.log(agents)
}





