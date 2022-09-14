<script>
    import { search, search_params } from "./stores";
    import Card from "./Card.svelte";
    import CardContainer from "./Card_container.svelte";
    import Search from "./Search.svelte";
    import NavBar from "./NavBar.svelte";

    let { getData, data } = search();
</script>

<NavBar />
<main class="page">
    <h2>Results for: {$search_params}</h2>
    <!-- {$search_params} -->
    {#await getData($search_params)}
        <p>loading...</p>
    {:then}
        <CardContainer>
            {#each $data["data"] as cont}
                <Card {cont} />
            {/each}
        </CardContainer>
    {/await}
</main>
<footer>Copyright (c) 2019 Jikan API</footer>