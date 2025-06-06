<script>
    let { data } = $props();
</script>

<div class="container my-5">
    <h1 class="mb-4">Usuários:</h1>

    <ul class="list-group">
        {#each data.users.users as user}
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <a href="/03/dummy/users/{user.id}" class="text-decoration-none">
                    {user.firstName}
                </a>
                <span class="badge bg-primary rounded-pill">{user.address.country}</span>
            </li>
        {/each}
    </ul>

    <div class="text-center mt-4">
        <button class="btn btn-secondary" on:click={() => history.back()}>
            Voltar
        </button>
    </div>
</div>
