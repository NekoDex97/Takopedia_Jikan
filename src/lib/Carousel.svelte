<script>
    import Card from "./Card.svelte";

    export let filter = "popularity";

    const filters = {
        popularity: "bypopularity",
        airing: "airing",
        upcoming: "upcoming",
        favorite: "favotite",
    };

    const url_list =
        "https://api.jikan.moe/v4/top/anime?filter=" +
        filters[filter] +
        "&limit=10";

    async function getlist() {
        const response = await fetch(url_list);
        const res = await response.json();

        return res.data;
    }

    let slide;
    let current = 0;
    const move_scroll = (type = 1) => {
        current += 300 * type;
        slide.scroll(current, 0);
    };

    // onMount(getlist);
</script>

{#await getlist()}
    loading...
{:then list}
    <div class="carousel">
        <button class="move prev" on:click={() => move_scroll(-1)}>{"<"}</button
        >
        <ul bind:this={slide} class="slides">
            {#each list as cont}
                <li class="slide"><Card {cont} /></li>
            {/each}
        </ul>
        <button class="move next" on:click={() => move_scroll(1)}>{">"}</button>
    </div>
{/await}

<style>
    .carousel {
        overflow: hidden;
        margin: 1rem;
        position: relative;
        width: 95%;
    }
    .slides {
        width: 100%;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: row;
        overflow: scroll;
        list-style: none;
        overflow: scroll;
        scroll-behavior: smooth;
        height: 350px;
        align-items: stretch;
        overflow-y: hidden;
        overflow-x: hidden;
        /* background-color: aqua; */
    }
    .slide {
        height: 100%;
        width: 100%;
        /* flex: 1 0 100%; */
    }
    .move {
        color: black;
        position: absolute;
        display: flex;
        place-items: center;
        top: 0;
        bottom: 0;
        margin: auto;
        height: 4rem;
        background-color: white;
        border: none;
        width: 2rem;
        font-size: 3rem;
        padding: 0;
        cursor: pointer;
        opacity: 0.5;
        transition: opacity 100ms;
        text-align: center;
    }
    .prev {
        left: 0;
        padding-left: 0.25rem;
        border-radius: 0 2rem 2rem 0;

    }
    .next {
        right: 0;
        padding-left: 0.75rem;
        border-radius: 2rem 0 0 2rem;
    }

    .move:hover {
        opacity: 1;
    }
    
</style>
