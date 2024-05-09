import { interiors } from "./interiors.js";
import { paints } from "./paints.js"

const container = document.querySelector("#container")

const render = async () => {

    const paint = await paints();
    const interior = await interiors();

    container.innerHTML = `
    <h1>Cars 'R Us: Personal Car Builder</h1>
    
        <section class="flexContent">

            <article class="flexCard">
                <h2>Paints</h2>
                ${paint}
            </article>

            <article class="flexCard">
                <h2>Interior</h2>
                ${interior}
            </article>
        
        </section>`

}

render()