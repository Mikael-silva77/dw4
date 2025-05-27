<script>
    let msg = $state('Passe o mouse sobre o botão e essa mensagem nunca mais será a mesma!'),
        clicado = $state(false);
 
    function entrando() {
        msg = 'Agora clique no botão!';
    }
 
    function saindo() {
        if (clicado) msg = 'Você clicou no botão!';
        else msg = 'Ok, da próxima vez faça o que eu te disser...';
        clicado = false;
    }
 
    function clicando() {
        clicado = true;
 
        // Gera o confete com canvas-confetti
        confetti({
            particleCount: 100, // Quantidade de partículas
            spread: 70, 
            origin: { y: 0.6 } 
        });
    }
</script>
 
<div class="text-center">
    <h1>Eventos de mouse</h1>
    <p>{msg}</p>
    <button onmouseover={entrando} onmouseout={saindo} onclick={clicando} class="btn btn-outline-primary" 
            onfocus={entrando}     onblur={saindo}>BOTÃO</button>
</div>
 
<svelte:head>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>
</svelte:head>