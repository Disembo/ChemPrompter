function displayReaction(name) {
    reactions.forEach(reaction => {
        if (reaction.name === name) {
            const reactionInfo = `
                <h2>${reaction.name}</h2>
                <p>Substrates: ${reaction.substrates}</p>
                <p>Products: ${reaction.products}</p>
                <p>Agents: ${reaction.agents}</p>
                <p>Conditions: ${reaction.conditions}</p>
                <p>Dosage: ${reaction.dosage}</p>
            `;
            document.getElementById('reaction-info').innerHTML = reactionInfo;
            switchTab('reaction-tab');
        }
    })
}

window.addEventListener("load", () => {
    let lst = document.getElementById("reaction-list");
    reactions.forEach(reaction => {
        let div = document.createElement("div");
        div.className = "reaction-item";
        div.onclick = () => {
            displayReaction(reaction.name);
        };
        div.innerHTML = `
            <h3>${reaction.name}</h3>
            <p>Substrates: ${reaction.substrates}</p>
            <p>Products: ${reaction.products}</p>
        `;
        lst.appendChild(div);
    })
}, false);