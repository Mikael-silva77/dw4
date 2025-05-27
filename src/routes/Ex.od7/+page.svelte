<script>
    let cidade = '';
    let usuarios = [];
    async function buscarUsuarios() {
        let resposta = await fetch('https://jsonplaceholder.typicode.com/users');
        let todosUsuarios = await resposta.json();
        usuarios = todosUsuarios.filter(user => user.address.city.toLowerCase() === cidade.toLowerCase());
    }
</script>

<input type="text" bind:value={cidade} placeholder="Nome da cidade" />
<button on:click={buscarUsuarios}>Buscar Usuários</button>
<ul>
    {#each usuarios as usuario}
        <li>{usuario.name}</li>
    {/each}
</ul>
