<script>
	let celsius = $state(0);
	let lunitemp = $state(0);

	function c2f() {
		lunitemp =( celsius - 10)/2.5;
	}

	function f2c() {
		celsius = lunitemp * 2.5 + 10;
	}
</script>
<h1>Clima no espaço🧑‍🚀🌡️</h1>
Celsius🌎: <input oninput={c2f} 
                type="number"
                bind:value={celsius} />
Lunitemp🌚: <input oninput={f2c}
                   type="number"
                   bind:value={lunitemp} />   