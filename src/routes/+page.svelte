<script>

	import Cabecalho from './Cabecalho.svelte';
	import Rodape from './Rodape.svelte';
	let nome = 'Mikael';
	let a = 10;
	let b = 20;

    import Poema from '$lib/Poema.svelte';

</script>

<p>Bem vindo ao meu site, fique à vontade!</p>


<p class="azul">Meu nome é {nome}!</p>
<p class="vermelho">{a} + {b} = {a + b}</p>
 
<p>Calculadora de temperatura: 
	<a href="./temperatura ">Clique aqui</a>!</p>

<Rodape />

<style>
	.azul {
		color: blue;
	}

	.vermelho {
		color: red;
	}
</style>
=======
<Poema />

