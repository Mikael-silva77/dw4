<script>
  import Personagem from '$lib/components/Personagem.svelte';
  import { cards } from '$lib/data.js';
</script>
 
<div class="row g-4">
  {#each cards as card}
    <div class="col">
      <Personagem {...card} />
    </div>
  {/each}
</div>