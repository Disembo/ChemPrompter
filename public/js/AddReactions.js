class Reaction{
    constructor(substrates, products, agents, conditions) {
        this.substrates = substrates;
        this.products = products;
        this.agents = agents;
        this.conditions = conditions;
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

        let ans = {Substrates: multiplyArrayByRatio(this.substrates), Products: multiplyArrayByRatio(this.products), Agents: multiplyArrayByRatio(this.agents)};
        return ans;
    }
}

let substrates;
let products;
let agents;
let conditions;

function setRowData(row, data) {
    const cell1 = row.insertCell(0);// agents
    const cell2 = row.insertCell(1);// mass
    const cell3 = row.insertCell(2);// volume
    const cell4 = row.insertCell(3);// mol
    const cell5 = row.insertCell(4);// molecular mass
    const cell6 = row.insertCell(5);// concentration
    const cell7 = row.insertCell(6);// eq
    const cell8 = row.insertCell(7);

    cell1.innerHTML = `<input type="text" placeholder="name" value="${data[0] ? data[0] : ''}">`;
    cell2.innerHTML = `<input type="number" placeholder="mg" value="${data[1] ? data[1] : ''}">`;
    cell3.innerHTML = `<input type="number" placeholder="mL" value="${data[2] ? data[2] : ''}">`;
    cell4.innerHTML = `<input type="number" placeholder="mmol" value="${data[3] ? data[3] : ''}">`;
    cell6.innerHTML = `<input type="number" placeholder="g/mol" value="${data[4] ? data[4] : ''}">`;
    cell7.innerHTML = `<input type="number" placeholder="mol/L" value="${data[5] ? data[5] : ''}">`;
    cell5.innerHTML = `<input type="number" placeholder="1" value="${data[6] ? data[6] : ''}">`;
    cell8.innerHTML = `<button onclick="editRow(this)">Edit</button> <button onclick="deleteRow(this)">Delete</button>`;
}

function addRow_Agents(ag = []) {
    const table = document.getElementById("forAgents").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    setRowData(newRow, ag);
}

function addRow_Substrates(sub = []) {
    const table = document.getElementById("forSubstrates").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    setRowData(newRow, sub);
}

function addRow_Products(prod = []) {
    const table = document.getElementById("forProducts").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    setRowData(newRow, prod);
}
function addRow_Conditions(cond = []) {
    const table = document.getElementById("forConditions").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    const cell1 = newRow.insertCell(0);// time
    const cell2 = newRow.insertCell(1);// temperature
    const cell3 = newRow.insertCell(2);

    cell1.innerHTML = `<input type="number" placeholder="hour" value="${cond[0] ? cond[0] : ''}">`;
    cell2.innerHTML = `<input type="number" placeholder="centigrade" value="${cond[1] ? cond[1] : ''}">`;
    cell3.innerHTML = `<button onclick="editRow(this)">Edit</button> <button onclick="deleteRow(this)">Delete</button>`;
}

function editRow(button) {
    const row = button.parentElement.parentElement;
    const cells = row.getElementsByTagName('td');

    for (let i = 0; i < cells.length - 1; i++) {
        const input = cells[i].getElementsByTagName('input')[0];
        if (input) {
            input.disabled = !input.disabled;
        }
    }
    button.textContent = button.textContent === "Edit" ? "Save" : "Edit";
}

function deleteRow(button) {
    const row = button.parentElement.parentElement;
    row.parentElement.removeChild(row);
}

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
    smiles = "[SMILES]" + getSmiles()
    addRow_Substrates([smiles]);
    //alert (smiles)
    //console.log(smiles)
    // const table = document.getElementById("forSubstrates").getElementsByTagName('tbody')[0];
    // const newRow = table.insertRow();
    // const cell1 = newRow.insertCell(0);// agents
    // const cell2 = newRow.insertCell(1);// mass
    // const cell3 = newRow.insertCell(2);// volume
    // const cell4 = newRow.insertCell(3);// mol
    // const cell5 = newRow.insertCell(4);// molecular mass
    // const cell6 = newRow.insertCell(5);// concentration
    // const cell7 = newRow.insertCell(6);// eq
    // const cell8 = newRow.insertCell(7)

    
    // cell1.innerHTML = smiles;
    // cell2.innerHTML = `<input type="number" placeholder="mg">`;
    // cell3.innerHTML = `<input type="number" placeholder="mL">`;
    // cell4.innerHTML = `<input type="number" placeholder="mmol">`;
    // cell6.innerHTML = `<input type="number" placeholder="g/mol">`;
    // cell7.innerHTML = `<input type="number" placeholder="mol/L">`;
    // cell5.innerHTML = `<input type="number" placeholder="1">`;
    // cell8.innerHTML = `<button onclick="editRow(this)">Edit</button> <button onclick="deleteRow(this)">Delete</button>`;
}

function addProducts(){
    smiles = "[SMILES]" + getSmiles()
    //alert (smiles)
    //console.log(smiles)
    addRow_Products([smiles]);
    // const table = document.getElementById("forProducts").getElementsByTagName('tbody')[0];
    // const newRow = table.insertRow();
    // const cell1 = newRow.insertCell(0);// agents
    // const cell2 = newRow.insertCell(1);// mass
    // const cell3 = newRow.insertCell(2);// volume
    // const cell4 = newRow.insertCell(3);// mol
    // const cell5 = newRow.insertCell(4);// molecular mass
    // const cell6 = newRow.insertCell(5);// concentration
    // const cell7 = newRow.insertCell(6);// eq
    // const cell8 = newRow.insertCell(7)

    
    // cell1.innerHTML = smiles;
    // cell2.innerHTML = `<input type="number" placeholder="mg">`;
    // cell3.innerHTML = `<input type="number" placeholder="mL">`;
    // cell4.innerHTML = `<input type="number" placeholder="mmol">`;
    // cell6.innerHTML = `<input type="number" placeholder="g/mol">`;
    // cell7.innerHTML = `<input type="number" placeholder="mol/L">`;
    // cell5.innerHTML = `<input type="number" placeholder="1">`;
    // cell8.innerHTML = `<button onclick="editRow(this)">Edit</button> <button onclick="deleteRow(this)">Delete</button>`;
}

function addAgents(){
    smiles = "[SMILES]" + getSmiles()
    addRow_Agents([smiles]);
    //alert (smiles)
    //console.log(smiles)
    // const table = document.getElementById("forAgents").getElementsByTagName('tbody')[0];
    // const newRow = table.insertRow();
    // const cell1 = newRow.insertCell(0);// agents
    // const cell2 = newRow.insertCell(1);// mass
    // const cell3 = newRow.insertCell(2);// volume
    // const cell4 = newRow.insertCell(3);// mol
    // const cell5 = newRow.insertCell(4);// molecular mass
    // const cell6 = newRow.insertCell(5);// concentration
    // const cell7 = newRow.insertCell(6);// eq
    // const cell8 = newRow.insertCell(7)

    
    // cell1.innerHTML = smiles;
    // cell2.innerHTML = `<input type="number" placeholder="mg">`;
    // cell3.innerHTML = `<input type="number" placeholder="mL">`;
    // cell4.innerHTML = `<input type="number" placeholder="mmol">`;
    // cell6.innerHTML = `<input type="number" placeholder="g/mol">`;
    // cell7.innerHTML = `<input type="number" placeholder="mol/L">`;
    // cell5.innerHTML = `<input type="number" placeholder="1">`;
    // cell8.innerHTML = `<button onclick="editRow(this)">Edit</button> <button onclick="deleteRow(this)">Delete</button>`;
}

function tableToArray(tableId) {
    const table = document.getElementById(tableId);
    const result = [];
    // Iterate through rows (excluding header)
    for (let i = 1; i < table.rows.length; i++) {
        const row = table.rows[i];
        const rowData = [];
        // Iterate through cells of current row
        for (let j = 0; j < row.cells.length-1; j++) {
            if (j == 0){
                rowData.push(row.cells[j].querySelector('input[type="text"]').value);
            }
            else{
                const inputElement = row.cells[j].querySelector('input[type="number"]');
                if (inputElement) {
                    rowData.push(parseFloat(inputElement.value));
                } else {
                    rowData.push(null); // Handle cells without input type="number"
            }
            }
        }
        result.push(rowData);
    }
    return result;
}

function tableToArray_Condition(tableId) {
    const table = document.getElementById(tableId);
    const result = [];
    // Iterate through rows (excluding header)
    for (let i = 1; i < table.rows.length; i++) {
        const row = table.rows[i];
        const rowData = [];
        // Iterate through cells of current row
        for (let j = 0; j < row.cells.length-1; j++) {
            const inputElement = row.cells[j].querySelector('input[type="number"]');
            if (inputElement) {
                rowData.push(parseFloat(inputElement.value));
            } else {
                rowData.push(null); // Handle cells without input type="number"
            }
        }
        result.push(rowData);
    }
    return result;
}

function transposeArray(array) {
    // Calculate dimensions of the original array
    const rows = array.length;
    const cols = array[0].length;

    // Create a new array to hold the transposed data
    const transposedArray = [];

    // Initialize transposedArray with empty arrays as per number of columns
    for (let i = 0; i < cols; i++) {
        transposedArray.push([]);
    }

    // Fill the transposedArray with data from the original array
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            transposedArray[j][i] = array[i][j];
        }
    }

    return transposedArray;
}


function finish(){
    // Usage example
    substrates = tableToArray("forSubstrates");
    products = tableToArray("forProducts");
    agents = tableToArray("forAgents");
    conditions = tableToArray_Condition("forConditions");
    // console.log(substrates,products,agents,conditions);

    substrates = transposeArray(substrates);
    products = transposeArray(products);
    agents = transposeArray(agents);
    // console.log(substrates,products,agents,conditions);
    console.log(substrates)
    console.log(products)
    console.log(agents)
    console.log(conditions)

    alert('Goodjob  !!!')
    let newReaction = new Reaction(substrates, products, agents, conditions);
    console.log(newReaction.newBySubstrates(20));

}
