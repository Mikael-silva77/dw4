<script>
  import { enhance } from '$app/forms';
  import { goto } from '$app/navigation';
  export let data;

  let nomeCartao = data?.nomeCartao || '';
  let numeroCartao = data?.numeroCartao || '';
  let validade = data?.validade || '';
  let cvv = data?.cvv || '';
  let plano = data?.plano || '';

  let errors = data?.errors || {};

  async function handleResult({ result }) {
    if (result.type === 'failure') {
      errors = result.data.errors || {};
    } else {
      errors = {};
      // Redireciona para página do plano
      const escolhido = result.data.plano.toLowerCase();
      await goto(`/06/inscricao/${escolhido}`);
    }
  }
</script>

<form method="POST" use:enhance={{ onResult: handleResult }}>
  <label>
    Nome no cartão:
    <input type="text" name="nomeCartao" bind:value={nomeCartao} />
  </label>
  {#if errors.nomeCartao}
    <p style="color: red;">{errors.nomeCartao}</p>
  {/if}

  <label>
    Número do cartão:
    <input type="text" name="numeroCartao" maxlength="16" bind:value={numeroCartao} />
  </label>
  {#if errors.numeroCartao}
    <p style="color: red;">{errors.numeroCartao}</p>
  {/if}

  <label>
    Data de validade (MM/AA):
    <input type="text" name="validade" placeholder="MM/AA" maxlength="5" bind:value={validade} />
  </label>
  {#if errors.validade}
    <p style="color: red;">{errors.validade}</p>
  {/if}

  <label>
    Código de segurança (CVV):
    <input type="text" name="cvv" maxlength="3" bind:value={cvv} />
  </label>
  {#if errors.cvv}
    <p style="color: red;">{errors.cvv}</p>
  {/if}

  <label>
    Plano:
    <select name="plano" bind:value={plano}>
      <option value="">Selecione um plano</option>
      <option value="Bit">Plano Bit (básico)</option>
      <option value="Byte">Plano Byte (intermediário)</option>
      <option value="Quantum">Plano Quantum (premium)</option>
    </select>
  </label>
  {#if errors.plano}
    <p style="color: red;">{errors.plano}</p>
  {/if}

  <button type="submit">Pagar</button>
</form>

<style>
  form {
    max-width: 400px;
    margin: 2rem auto;
    font-family: Arial, sans-serif;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  label {
    font-weight: bold;
    display: flex;
    flex-direction: column;
  }

  input, select {
    padding: 0.5rem;
    font-size: 1rem;
  }

  button {
    background-color: #0984e3;
    color: white;
    border: none;
    padding: 0.6rem;
    border-radius: 6px;
    cursor: pointer;
  }

  button:hover {
    background-color: #74b9ff;
  }
</style>
