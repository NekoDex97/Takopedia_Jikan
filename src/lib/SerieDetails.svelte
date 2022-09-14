<script>
    import { item_content } from "./stores";
    item_content.subscribe((v) => localStorage.setItem("param", v));
    import NavBar from "./NavBar.svelte";
    let { title,synopsis, url, images,score,raiting,title_japanese,episodes,airing,status,aired,themes } = $item_content;
    let {title_english,type}=$item_content
</script>

<NavBar />
<main class="details">
    <h2 class="serieTitle">{title}</h2>
    <div class="scores">
        <div>{score} <br/> score</div>
        <div>Airing {airing?"yes":"no"}</div>
        <div>Status: <br/> {status}</div>
        <div>Raiting: {raiting==undefined?"none":raiting}</div>
        <div>
            {#each themes as item}
                {#if item.name!=undefined}
                     <!-- content here -->
                     {item.name} <!-- content here -->
                {/if}
            {/each}
        </div>
    </div>
    <img  src={images.webp.image_url} alt="serie">
    <article class="info">
        <h3>Alternative titles</h3>
        <ul>
            <li>Japanese: {title_japanese}</li>
            <li>English: {title_english}</li>
        </ul>
        <h3>Information</h3>
        <article>
            <p>Type: {type}</p>
            
            <p>Episodes: {episodes}</p>
            
            
            <h4>Aired</h4>
            <p>from:{aired.from}</p>
        </article>
    </article>
    <div class="synopsis">
        <h3>Synopsis</h3>
        <p>{synopsis}</p>
    </div>
    <a href={url}>see it in My Anime Page</a>
</main>
<footer>Copyright (c) 2019 Jikan API</footer>

<style>
    .details{
        display: grid;
        grid-template-columns: auto 1fr;
        
    }

    .info{
        grid-area: 4/1/6/2;
        max-width: 30%;
    }
    .serieTitle{
        grid-area: 1/1/2/3;
    }
    .scores{
        grid-area: 2/2/3/3;
        display: flex;
        flex-direction: row;
        /* border: 2px solid; */
        justify-content: space-around;
        align-items: center;
        flex-wrap: nowrap;
        background-color: rgb(247, 183, 190);
    }
   
    img{
        grid-area:2 / 1 / 4 /2 ;
    }
    .synopsis{
        grid-area: 3/2/5/3 ;
    }
    a{
        grid-area: 5/2/6/3;
    }
    .details > img{
        object-fit: cover;
    }

    .scores > div{
        margin-left: 5px;
        color: rgb(112, 18, 27);

    }

    .info > ul > li {
        writing-mode: horizontal-tb;
    }
    @media screen and (max-width:400px){
        .details{
            display: flex;
        }
    }
    
</style>
