<script>
    import { search_params } from "./stores";
    let texto = "";
    search_params.subscribe((v) => localStorage.setItem("param", v));
</script>

<form
    on:submit|preventDefault={() => {
        search_params.set(texto);
        if (texto.length <= 0) return;

        if (window.location.pathname !== "/seach_results/") {
            window.location.href = "/search_results/";
        }
    }}
>
    <input bind:value={texto} placeholder="Love Live"/>
    <button type="submit">go</button>
    <!-- <p>{texto}</p> -->
</form>

<style>
    form {
        display: flex;
        flex-direction: row;
        flex-grow: 1;
        justify-content: center;
        flex-basis: 30%;
        
    }
    form button {
        border-radius: 0 1rem 1rem 0;
    }
    form input {
        border-radius: 1rem 0 0 1rem;
        border-right: 0;
    }
</style>