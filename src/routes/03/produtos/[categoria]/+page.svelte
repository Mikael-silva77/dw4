<script>
    export let data;
    let busca = data.busca;
  </script>
  
  <h2>Produtos da categoria  "{data.categoria}"</h2>
  
  <form class="input-group mb-3">
    <input name="busca" class="form-control"
      placeholder="Buscar por título ou descrição" />
    <button class="btn btn-outline-secondary">Buscar</button>
  </form>

  <div class="list-group">
    {#each data.produtosFiltrados as produto}
    <div href="#" class="list-group-item list-group-item-action">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{produto.titulo}</h5>
        <small class="text-body-secondary">R$ {produto.preco}</small>
      </div>
      <p class="mb-1">{produtp.descricao}</p>
      <small class="text-body-secondary">
        {#each produto.categorias as categoria}
        <span class="badge text-bg-secondary"><a class="text-decoration-none text-light href="/produtos/{categoria}">{categoria}</a></span>&nbsp;
        {/each}
      </small>

    </div>
{/each}
  </div>
  
 