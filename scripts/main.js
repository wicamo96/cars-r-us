import { interiors } from "./interiors.js";
import { orderList } from "./orders.js";
import { paints } from "./paints.js"
import { saveOrder } from "./saveOrder.js";
import { technologies } from "./technologies.js";
import { wheels } from "./wheels.js";

const container = document.querySelector("#container")

const render = async () => {

    const paint = await paints();
    const interior = await interiors();
    const wheel = await wheels();
    const technology = await technologies();
    const save = await saveOrder();
    const orders = await orderList();

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

            <article class="flexCard">
                <h2>Wheels</h2>
                ${wheel}
            </article>

            <article class="flexCard">
                <h2>Technologies</h2>
                ${technology}
            </article>
        </section>
        
        <section class='flexButton'>
            <div id="submit">${save}</div>
        </section>
        
        <section class="orders">
        ${orders}
        </section>`

}

document.addEventListener("newOrderCreated", render)

render()