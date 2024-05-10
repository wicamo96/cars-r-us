export const orderList = async () => {
    // Fetch data from db
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=paints&_expand=interiors&_expand=technologies&_expand=wheels");
    // Format data into JS objects
    const orders = await fetchResponse.json();

    // Begin building html formatted info for display
    let htmlString = `<section><h2>Current Orders</h2>`;

    // Use .map() array method to grab info from the orders array
    const arrayCopy = orders.map((order) => {
        let price = (order.paints.price + order.interiors.price + order.technologies.price + order.wheels.price) * order.vehicleTypeId;
        
            price = price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
            })

            return `<div class="orderEntry">Order #${order.id} costs ${price}</div>`;
        }
    )

    // Use .join() array method to concantenate info into the htmlString
    htmlString += arrayCopy.join("");

    // Close section containing html formatted info
    htmlString += `</section>`;

    return htmlString;
}