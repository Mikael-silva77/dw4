<script>
  import { filmes, gêneros } from '$lib/filmes.js';

  let gênerosSelecionados = [];
  let textoFiltro = '';
  let filtrados = filmes.slice();

  function filtrarGenero(event) {
    if (event.target.checked) {
      gênerosSelecionados.push(event.target.value);
    } else {
      gênerosSelecionados.splice(gênerosSelecionados.indexOf(event.target.value), 1);
    }
    atualizarFiltro();
  }

  function filtrarTexto(event) {
    textoFiltro = event.target.value.toLowerCase();
    atualizarFiltro();
  }

  function atualizarFiltro() {
    filtrados = filmes.filter((filme) => {
      const correspondeGenero =
        gênerosSelecionados.length === 0 ||
        gênerosSelecionados.some((gênero) => filme.gêneros.includes(gênero));
      const correspondeTexto = filme.título.toLowerCase().includes(textoFiltro);
      return correspondeGenero && correspondeTexto;
    });
  }
</script>

<style>
  .btn-custom {
    background-color: #338540; 
    border-color: #c9d60e;
    color: rgb(61, 4, 4);
  }

</style>   

<div class="row align-items-center mb-3">
  <div class="col">
    <input class="form-control" placeholder="Filtrar por título..." oninput={filtrarTexto} />
  </div>
  {#each gêneros as gênero}
    <div class="col">
      <div class="form-check form-check-inline">
        <input
          oninput={filtrarGenero}
          class="form-check-input"
          type="checkbox"
          id={gênero}
          value={gênero}
        />
        <label class="form-check-label" for={gênero}>{gênero}</label>
      </div>
    </div>
  {/each}
</div>
<div class="row g-4">
  {#each filtrados as filme}
    <div class="col-md-6 col-xl-3">
      <div class="card h-100">
        <div class="row g-0">
          <div class="col-3 col-sm-4">
            <img src={filme.imagem} class="img-fluid rounded-start" alt="capa do filme" />
          </div>
          <div class="col-sm-8">
            <div class="card-body">
              <h5 class="card-title">{filme.título}</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">
                {filme.ano}
              </h6>
              <p class="card-text">{filme.sinopse}</p>
              <p class="card-text">
                {#each filme.gêneros as gênero}
                  <span class="badge text-bg-secondary mx-1">{gênero}</span>
                {/each}
              </p>
            
              <a
                class="btn btn-custom mt-2"
                href={filme.referência}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver no IMDb
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/each}
</div>


