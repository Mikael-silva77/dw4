<script>
    const tarefas = $state([]);
    let novaTarefa = $state('');
    let tarefaEditadaIndice = $state();
    let tarefaEditadaItem = $state();
 
    function adicionarTarefa() {
        tarefas.push(novaTarefa);
        novaTarefa = '';
    }
 
    function excluirTarefa(i) {
        tarefas.splice(i, 1);
    }
 
    function editarTarefa(tarefa, i) {
        tarefaEditadaItem = tarefa;
        tarefaEditadaIndice = i;
    }
 
    function salvarTarefa(i) {
        tarefas[i] = tarefaEditadaItem;
        tarefaEditadaIndice = -1;
    }
    function cancelarTarefa(){
   tarefaEditadaItem = '';
   tarefaEditadaIndice = -1;
    }
</script>
 
<h2>Lista de tarefas</h2>
<p>
    <input placeholder="Digite aqui tua nova tarefa..." bind:value={novaTarefa} />
    <button onclick={adicionarTarefa}>+</button>
</p>
<ul>
    {#each tarefas as tarefa, i}
        <li>
            {#if tarefaEditadaIndice == i}
                <input bind:value={tarefaEditadaItem} />
                <button onclick={() => salvarTarefa(i)}>💾</button>
    
                <button onclick={cancelarTarefa}>❎</button>
                {:else}
                {tarefa}
                <button onclick={() => editarTarefa(tarefa, i)}>✏</button>
           
            <button onclick={() => excluirTarefa(i)}>🗑</button>
           {/if}
        </li>
        
    {/each}
</ul>                               