<script>
	let cf = $state(0),
		cc = $state(0);

	function calcularcusto() {
		if (cf <= 12000) {
			cc = cf + cf * 0.05;
		} else if (cf <= 25000) {
			cc = cf + cf *0.1 + cf * 0.15;
		} else {
			cc = cf + cf * 0.15 + cf * 0.2;
		}
	}
</script>

<h1>Capitulo 05 - Exercicio 02</h1>
<p>
	Calculo do custo do carro ao consumidor, considerando o custo de produção pela fábrica e as taxas
	e impostos embutidos.
</p>

<p>Custo da fábrica : <input oninput={calcularcusto} type="number"
 bind:value={cf} /></p>
<p>Custo do carro: R${cc}</p>
