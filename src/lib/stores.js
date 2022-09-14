import { writable } from "svelte/store";

export const search_params = writable(localStorage.getItem("param"))

export const item_content = writable(JSON.parse(localStorage.getItem("serie")))


export function search() {

    //let raw_list=localStorage.getItem("series")


    const data = writable({})

    async function getData(name) {
        if (name.length < 2) {
            return;
        }
        let url = "https://api.jikan.moe/v4/anime?q=" + name + "&sfw"


        try {
            const response = await fetch(url);
            const series = await response.json()
            localStorage.setItem("series",JSON.stringify(series))
            data.set(series)

        }
        catch (e) { console.log(e) }

    }


    //getData();
    return { data, getData };
}



