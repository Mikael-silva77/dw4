<script>
    export let data;
    let busca = data.busca;
  </script>
  
  <h1>Produtos da {data.categoria}</h1>
  
  <form method="get">
    <input
      type="text"
      name="busca"
      placeholder="Buscar por título ou descrição"
      bind:value={busca}
    />
    <button type="submit">Buscar</button>
  </form>
  
  {#if data.produtos.length > 0}
    <ul>
      {#each data.produtos as produto}
        <li>
          <h2>{produto.titulo}</h2>
          <p>{produto.descricao}</p>
          <strong>R$ {produto.preco.toFixed(2)}</strong>
        </li>
      {/each}
    </ul>
  {:else}
    <p>Nenhum produto encontrado.</p>
  {/if}