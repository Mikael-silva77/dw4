<script>
    let moedas = [
        { nome: 'Dólar americano', código: 'USD' },
        { nome: 'Real brasileiro', código: 'BRL' },
        { nome: 'Euro', código: 'EUR' },
        { nome: 'Libra esterlina', código: 'GBP' },
        { nome: 'Iene japonês', código: 'JPY' },
        { nome: 'Peso argentino', código: 'ARS' }
    ];

    let código1 = moedas[0].código;
    let código2 = moedas[1].código;
    let valor1 = 0;
    let valor2 = 0;
    let moedaPadrao = {};
    let ultimaAtualizacao = '';

    async function mudarMoeda() {
        const resposta = await fetch(`https://open.er-api.com/v6/latest/${código1}`);
        moedaPadrao = await resposta.json();
        ultimaAtualizacao = new Date().toLocaleString();
        converterDe();
    }

    function converterDe() {
        valor2 = (valor1 * moedaPadrao.rates[código2]).toFixed(2);
    }

    function converterPara() {
        valor1 = (valor2 / moedaPadrao.rates[código2]).toFixed(2);
    }

    function inverterMoedas() {
        let tempCodigo = código1;
        código1 = código2;
        código2 = tempCodigo;

        let tempValor = valor1;
        valor1 = valor2;
        valor2 = tempValor;

        mudarMoeda();
    }

    mudarMoeda();
</script>

<div class="container mt-5">
    <h1 class="text-center mb-4 text-primary">Cotação de Moedas</h1>
    <div class="input-group mb-3">
        <select class="form-select" bind:value={código1} onchange={mudarMoeda}>
            {#each moedas as moeda}
                <option value={moeda.código} title={moeda.nome}>{moeda.código}</option>
            {/each}
        </select>
        <input placeholder="0,00" type="number" class="form-control w-25" oninput={converterDe} bind:value={valor1} />
        <button class="btn btn-outline-secondary" type="button" onclick={inverterMoedas}>⇄</button>
        <input placeholder="0,00" type="number" class="form-control w-25" oninput={converterPara} bind:value={valor2} />
        <select class="form-select" bind:value={código2} onchange={converterPara}>
            {#each moedas as moeda}
                <option value={moeda.código} title={moeda.nome}>{moeda.código}</option>
            {/each}
        </select>
    </div>

    <div class="text-center mb-4">
        <p class="text-muted">Última atualização: {ultimaAtualizacao}</p>
    </div>

    <div class="text-center">
        <a href="https://www.exchangerate-api.com" target="_blank" class="text-muted">Rates By Exchange Rate API</a>
    </div>
</div>

<style>
    .container {
        background-color: #ffffff73;
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
    }

    h1 {
      
        font-family: 'Arial', sans-serif;
        font-weight: 600;
    
    }

    .input-group {
        max-width: 600px;
        margin: 0 auto;
    }

    .form-control {
        font-size: 1.2rem;
        padding: 10px;
    }

    .btn-outline-secondary {
        font-size: 1.5rem;
        padding: 0.5rem 1rem;
        background-color: #7a138f;
        color: white;
    }

    .btn-outline-secondary:hover {
        background-color: #480663;
        color: white;
    }

    .text-center a {
        text-decoration: none;
        font-size: 0.9rem;
    }

    .text-muted {
        color: #6c757d;
    }
</style>

<head>
    <style>
      body {
        background-image: url('/INST_SemPatch_SITE_1500.jpg'); 
        background-size: cover; 
        background-position: center;
        background-attachment: fixed; 
        font-family: 'Times New Roman', Times, serif;
      }
    </style>
  </head>
