<script>
	import { item_content } from './stores.js';
    import Search from "./Search.svelte";

    async function randomPage(){
        try {
            const response = await fetch("https://api.jikan.moe/v4/random/anime");
            const serie = await response.json()
            localStorage.setItem("serie",JSON.stringify(serie.data))
            item_content.set(serie.data)
        }

        catch (e) { console.log(e) }
        window.location.href = "/serie_details/";
    }
</script>

<header>
    <a class="pagename" href="/"> <b>Takopedia</b> </a>
    <Search />
    <button class="random" on:click={()=>randomPage()}>Random page</button>
</header>

<style>
    .random{
        margin:auto 15px;
        flex-basis: 15%;
    }
    .pagename{
        font-size: larger;
        margin: auto 15px;
        flex-basis: 15%;
    }
</style>
