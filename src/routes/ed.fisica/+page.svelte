<script>
	const tarefasAFazer = $state([]);
	const tarefasConcluidas = $state([]);
	let tarefaNova = $state();
	let tarefaEditandoIndice = $state();
	let tarefaEditando = $state();
  
	function adicionarTarefa() {
	  if (tarefaNova.trim() !== '') {
		tarefasAFazer.push(tarefaNova);
		tarefaNova = '';
	  } else {
		alert('A tarefa não pode estar vazia.');
	  }
	}
  
	function excluirTarefa(i, lista) {
	  lista.splice(i, 1);
	}
  
	function editarTarefa(i) {
	  tarefaEditandoIndice = i;
	  tarefaEditando = tarefasAFazer[i];
	}
  
	function salvarTarefa(i) {
	  tarefasAFazer[i] = tarefaEditando;
	  tarefaEditandoIndice = null;
	}
  
	function cancelarEdicao() {
	  tarefaEditandoIndice = null;
	  tarefaEditando = '';
	}
  
	function marcarConcluida(i) {
	  tarefasConcluidas.push(tarefasAFazer[i]);
	  tarefasAFazer.splice(i, 1);
	}
  
	function desmarcarConcluida(i) {
	  tarefasAFazer.push(tarefasConcluidas[i]);
	  tarefasConcluidas.splice(i, 1);
	}
  </script>
  
  <style>
	body {
	  font-family: Arial, sans-serif;
	  margin: 20px;
	  background-color: #f4f7fa;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  min-height: 100vh;
	  flex-direction: column;
	}
  
	.quadrado {
	background: linear-gradient(45deg, #270752, #0c3d75, #007BFF);;
	  border: 2px solid #000000;
	  padding: 20px;
	  border-radius: 8px;
	  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
	  width: 400px;
	  margin-bottom: 20px;
	  display: flex;
	  flex-direction: column;
	}
  
	.quadrado h2 {
	  color: #000000;
	  text-align: center;
	}
  
	.entrada-tarefa input {
	  padding: 10px;
	  font-size: 16px;
	  width: 300px;
	  border: 1px solid #000000;
	  border-radius: 4px;
	}
  
	button {
	  background-color: #cccccc;
	  color: white;
	  border: none;
	  padding: 10px;
	  font-size: 16px;
	  border-radius: 4px;
	  cursor: pointer;
	  margin-left: 5px;
	}
  
	button:hover {
	  background-color: #afafaf;
	}
  
	ul {
	  list-style-type: none;
	  padding: 0;
	  margin-top: 20px;
	}
  
	li {
	  background-color: #f9f9f9;
	  border: 1px solid #ddd;
	  margin: 5px 0;
	  padding: 10px;
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	  border-radius: 4px;
	}
  
	li.concluido {
	  text-decoration: line-through;
	  color: gray;
	  background-color: #e9ecef;
	}
  
	.tarefas-secao h3 {
	  color: #007BFF;
	  margin-top: 20px;
	}
  
	/* Container para a parte de tarefas a fazer e concluídas */
	.tarefas-container {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	}
  </style>
  
  <div class="quadrado">
	<h2>Lista de Tarefas</h2>
  
	<!-- Quadrado para Digitar a Tarefa -->
	<div class="entrada-tarefa">
	  <input placeholder="Digite a tarefa..." bind:value={tarefaNova} />
	  <button onclick={adicionarTarefa}>➕</button>
	</div>
  
	<!-- Tarefas a Fazer -->
	<div class="tarefas-container">
	  <h3>Tarefas a Fazer</h3>
	  <ul>
		{#each tarefasAFazer as tarefa, i}
		  <li>
			{#if tarefaEditandoIndice == i}
			  <input bind:value={tarefaEditando} />
			  <button onclick={()=> salvarTarefa(i)}>💾</button>
			  <button onclick={cancelarEdicao}>❌</button>
			{:else}
			  {tarefa}
			  <span>
				<button onclick={()=> editarTarefa(i)}>✏</button>
				<button onclick={()=> excluirTarefa(i, tarefasAFazer)}>🗑</button>
				<button onclick={()=> marcarConcluida(i)}>✔</button>
			  </span>
			{/if}
		  </li>
		{/each}
	  </ul>
  
	  <!-- Tarefas Concluídas -->
	  <h3>Tarefas Concluídas</h3>
	  <ul>
		{#each tarefasConcluidas as tarefa, i}
		  <li class="concluido">
			{tarefa}
			<span>
			  <button onclick={() => excluirTarefa(i, tarefasConcluidas)}>🗑</button>
			  <button onclick={()=> desmarcarConcluida(i)}>↩</button>
			</span>
		  </li>
		{/each}
	  </ul>
	</div>
  </div>
  