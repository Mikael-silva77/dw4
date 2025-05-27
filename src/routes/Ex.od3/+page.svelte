<script>
    import { onMount } from 'svelte';
    let usuarios = [];
    let mostrarUsuarios = false;

    async function carregarUsuarios() {
        let resposta = await fetch('https://jsonplaceholder.typicode.com/users');
        usuarios = await resposta.json();
        mostrarUsuarios = true;
    }
</script>

<button on:click={carregarUsuarios}>Carregar Usuários</button>
{#if mostrarUsuarios}
    <ul>
        {#each usuarios as usuario}
            <li>{usuario.name}</li>
        {/each}
    </ul>
{/if}