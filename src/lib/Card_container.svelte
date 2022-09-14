<script>
</script>

<div class="card_container">
    <slot />
</div>

<style>
    .card_container {
        width: 90vw;
        margin: auto;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(15rem,1fr));
        justify-items: center;
        gap: 10px;
        justify-content: space-evenly;
        align-content: space-between;
    }
</style>
