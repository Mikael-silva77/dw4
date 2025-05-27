<script>
    let produtos = [
      { nome: 'Camisa internacional', preco: 284.99, imagem: '/inter.webp', selecionado: false },
      { nome: 'Camisa palmeiras', preco: 180.40, imagem: '/Palmeiras.webp', selecionado: false },
      { nome: 'Camisa vasco', preco: 270.00, imagem: '/Vasco.webp', selecionado: false },
      { nome: 'Camisa São Paulo', preco: 237.49, imagem: '/Sao pailo.webp', selecionado: false },
      { nome: 'Camisa Atletico mineiro', preco: 119.00, imagem: '/Atletico m.webp', selecionado: false },
    ];
  
    const calcularTotais = () => {
      const selecionados = produtos.filter(produto => produto.selecionado);
      const totalItens = selecionados.length;
      const valorTotal = selecionados.reduce((total, produto) => total + produto.preco, 0);
      return { totalItens, valorTotal };
    };
  
    const selecionarTudo = () => {
      produtos = produtos.map(produto => ({ ...produto, selecionado: true })); 
    };
  
    
    const limparSelecao = () => {
      produtos = produtos.map(produto => ({ ...produto, selecionado: false })); 
    };
  
  
    const alternarSelecao = (index) => {
      produtos[index].selecionado = !produtos[index].selecionado; 
    };
  
    
    const finalizarCompra = () => {
      const selecionados = produtos.filter(produto => produto.selecionado);
      if (selecionados.length === 0) {
        alert("Você não selecionou nenhum produto.");
      } else {
        alert(`Compra finalizada! Você comprou:\n${selecionados.map(produto => `${produto.nome} - R$ ${produto.preco.toFixed(2)}`).join("\n")}\n\nTotal: R$ ${calcularTotais().valorTotal.toFixed(2)}`);
      }
    };
  </script>
  
  <div class="container mt-4">
    <h1>Carrinho de Compras</h1>
  
    <div class="d-flex justify-content-between mb-3">
      <button class="btn btn-primary" on:click={selecionarTudo}>
        Selecionar Tudo
      </button>
      <button class="btn btn-danger" on:click={limparSelecao}>
        Limpar Seleção
      </button>
    </div>
  
    <div class="row">
      {#each produtos as produto, index}
        <div class="col-md-4 mb-3">
          <div class="card">
            <img src={produto.imagem} class="card-img-top" alt={produto.nome} style="height: 300px; object-fit: cover;">
            <div class="card-body">
              <h5 class="card-title">{produto.nome}</h5>
              <p class="card-text">R$ {produto.preco.toFixed(2)}</p>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  checked={produto.selecionado}
                  on:change={() => alternarSelecao(index)}
                />
                <label class="form-check-label" for="produto{index}">
                  Selecionar
                </label>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <p>
          <strong>Total de itens selecionados:</strong> {calcularTotais().totalItens}
        </p>
        <p>
          <strong>Valor total:</strong> R$ {calcularTotais().valorTotal.toFixed(2)}
        </p>
      </div>
      <button
        class="btn btn-success"
        on:click={finalizarCompra}
        disabled={calcularTotais().totalItens === 0}
      >
        Finalizar Compra
      </button>
    </div>
  </div>
  
  <style>
    .container {
      max-width: 1200px;
      margin: 0 auto;
      position: center;
    }
  
    .card {
      border: 1px solid #8d0b32;
      border-radius: 8px;
    }
  
    .card-img-top {

      width: 100%;
      border-radius: 8px 8px 0 0;
    }
  
    .card-body {
      text-align: center;
    }
  
    .form-check {
      margin-top: 10px;
    }
  </style>
  