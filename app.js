const nomes =[];

function adicionarNome() {
    const nomeInput = document.getElementById('nome');
    const nome = nomeInput.value.trim();

    if (nome !== "") {
        nomes.push(nome);
        atualizarListaAmigos(); 
        nomeInput.value = ""; 
    }
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; 

    nomes.forEach(nome => {
        const novoItem = document.createElement('li');
        novoItem.textContent = nome;
        listaAmigos.appendChild(novoItem);
    });
}

function sortearAmigo() {
    if (nomes.length < 2) {
        document.getElementById('resultado').innerHTML = "Insira pelo menos dois nomes.";
        return;
    }

    const sorteio = {};
    const participantes = [...nomes];

    nomes.forEach(nome => {
        let amigoSecreto = participantes[Math.floor(Math.random() * participantes.length)];
        while (amigoSecreto === nome) {
            amigoSecreto = participantes[Math.floor(Math.random() * participantes.length)];
        }
        sorteio[nome] = amigoSecreto;
        participantes.splice(participantes.indexOf(amigoSecreto), 1);
    });

    let resultadoHTML = "";
    for (const nome in sorteio) {
        resultadoHTML += `<li class="result-item">${nome}: ${sorteio[nome]}</li>`;
    }

    document.getElementById('resultado').innerHTML = resultadoHTML;
}