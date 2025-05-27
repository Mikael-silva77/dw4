<script>
    let idPostagem = '';
    let titulo = '';
    async function buscarTitulo() {
        let resposta = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPostagem}`);
        let postagem = await resposta.json();
        titulo = postagem.title;
    }
</script>

<input type="number" bind:value={idPostagem} placeholder="ID da postagem" />
<button on:click={buscarTitulo}>Buscar Título</button>
<h2>{titulo}</h2>