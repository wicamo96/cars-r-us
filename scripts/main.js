import { paints } from "./paints.js"

const container = document.querySelector("#container")

const render = async () => {

    const paint = await paints();

    container.innerHTML = `
    <h1>Cars 'R Us: Personal Car Builder</h1>
    
        <section class="flexContent">

            <article class="flexCard">
                <h2>Paints</h2>
                ${paint}
            </article>
        
        </section>`

}

render()