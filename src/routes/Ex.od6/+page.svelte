<script>
    let idPostagem = '';
    let postagem = null;
    let comentarios = [];

    async function buscarPostagem() {
        let resposta = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPostagem}`);
        postagem = await resposta.json();

        let resposta2 = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${idPostagem}`);
        comentarios = await resposta2.json();
    }
</script>

<input type="number" bind:value={idPostagem} placeholder="ID da postagem" />
<button on:click={buscarPostagem}>Buscar Postagem</button>
{#if postagem}
    <h2>{postagem.title}</h2>
    <p>{postagem.body}</p>
    <h3>Comentários</h3>
    <ul>
        {#each comentarios as comentario}
            <li><strong>{comentario.email}</strong>: {comentario.body}</li>
        {/each}
    </ul>
{/if}
