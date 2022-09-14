<script>
  import { onMount } from "svelte";

  import Home from "./lib/Home.svelte";
  import NavBar from "./lib/NavBar.svelte";
  
  
  onMount(() => {
    const bar=document.createElement("NavBar");
    document.body.appendChild(bar)
  });
</script>



<NavBar/>
<main>
  <h1>Hi! We have the info of the anime you are looking for <br/> ᕙ(  •̀ ᗜ •́  )ᕗ  </h1>
  <Home />
</main>
<footer> This site Made with Jikan REST API </footer>

<style>
  
</style>
