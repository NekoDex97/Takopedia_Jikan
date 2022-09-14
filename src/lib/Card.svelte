<script>
    import sample from "./fake_data"
    import { item_content} from "./stores"
    
    //datos
    export let cont=sample;
    //cont=sample
    let{title,images}=cont;
    let{image_url}=images.webp

    function seeDetails(){
        
        item_content.set(cont)
        localStorage.setItem("serie",JSON.stringify(cont))
        window.location.href=('/serie_details/')
    }
    
    
</script>
    
<article class="card"  on:click={seeDetails}>
    
    <h3 class="item_title">{title}</h3>
    <img src={image_url} class="animg" alt="">
    
</article>

<style>
    .item_title{
        text-overflow: ellipsis;
        font-size: 1rem;
        height: 10%;
        white-space: nowrap;
        overflow: hidden;
        color: black;
        

    }
    .card{
        background-color: aliceblue;
        width: 12em;
        display: flex;
        flex-direction: column;
        
        padding: 0;
        justify-content: space-between;
        gap: 0px;
        border-radius: 1em;
        height: 100%;
        overflow: hidden;
    }
    .animg{
        flex-basis: 80%;
        width: 100%;
        height: 80%;
        object-fit: contain;
        /* align-self: center; */
        
        
    }
    

    .card:hover{
        cursor: pointer ;
    }
</style>
