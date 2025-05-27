<script>
	let a = $state(0),
		b = $state(0);

	function calculardesconto() {
		if (a <= 12) {
		b = 50 
		} else if (a < 17) {
	    b = 30 
		} else if ( a >60){
		b = 40 
		} else {
        b = 0
        }
	}
</script>
    <h1>Entrada do Cinema</h1>


<p>Quantos anos você tem:<input oninput={calculardesconto} type="number"
    bind:value={a} /></p>

<p>Seu desconto no ingresso é de {b}% Parabéns😊</p>
     <h1>Curta o filme📽️</h1>
 

