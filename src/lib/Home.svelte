<script>
    import Carousel from "./Carousel.svelte";
    
</script>

<section class="home">
    <h2>Airing</h2>

    <Carousel filter="airing" />
</section>
<section>

    <h2>Popular Series</h2>
    
    <Carousel filter="popularity" />
</section>
<section>

    <h2>Upcoming Series</h2>
    
    <Carousel filter="upcoming" />
</section>

<style>
    section{
        width: 100%;
        padding: 0;
    }
</style>
