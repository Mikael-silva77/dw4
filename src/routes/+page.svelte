<script>
<<<<<<< HEAD
	import Cabecalho from './Cabecalho.svelte';
	import Rodape from './Rodape.svelte';
	let nome = 'Mikael';
	let a = 10;
	let b = 20;
=======
    import Poema from '$lib/Poema.svelte';
>>>>>>> 41af9bbf8282238d60acc88813e50ca2ebd360ee
</script>

<p>Bem vindo ao meu site, fique à vontade!</p>

<<<<<<< HEAD

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
>>>>>>> 41af9bbf8282238d60acc88813e50ca2ebd360ee
