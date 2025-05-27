<script>
<<<<<<< HEAD
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
   
    let { children } = $props();
  </script>
   
  <div class="d-flex flex-column min-vh-100 container-fluid">
    <Header />
   
    <main>{@render children()}</main>
   
    <Footer />
  </div>
=======
    let { children } = $props();
</script>

<nav class="navbar navbar-expand-sm bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="/#">
            <img src="/favicon.png" alt="Logo" width="24" height="24" />
            DW4
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="/10">Capítulo 10</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

{@render children()}
>>>>>>> 41af9bbf8282238d60acc88813e50ca2ebd360ee
