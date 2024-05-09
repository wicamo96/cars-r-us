export const paints = async () => {
    // Fetch color info from db
    const fetchResponse = await fetch("http://localhost:8088/color");
    // Convert to JS object and store in paints variable
    const paints = await fetchResponse.json();

    // Begin building dropdown to insert info about paint colors from db
    let paintsHTML = `<select id="paintDropdown">
                        <option value="0">Select A Color</option>`;

    // Use .map() method to copy array pulled from db and add to the dropdown
    let arrayCopy = paints.map((paint) => {
        return `<option value="${paint.id}">${paint.color}</option>`;
        }
    )

    // Use .join() method to concatenate dropdown info into a useable dropdown
    paintsHTML += arrayCopy.join("");

    // Close select that holds dropdown
    paintsHTML += "</select>";

    // Return dropdown
    return paintsHTML;
}