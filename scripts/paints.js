import { setPaint } from "./transientState.js";

// Define a function to change the paintId in the transientState
const handlePaintChange = (changeEvent) => {
    // Check the id in the state of what was clicked
    if (changeEvent.target.id === 'paintDropdown') {
        // Grab id from the state of what was changed and parseInt
        const convertedToInteger = parseInt(changeEvent.target.value);
        // Invoke function defined in the transientState module to change the paintId to the one we just parsed
        setPaint(convertedToInteger);
    }
}

export const paints = async () => {
    // Fetch color info from db
    const fetchResponse = await fetch("http://localhost:8088/colors");
    // Convert to JS object and store in paints variable
    const paints = await fetchResponse.json();

    // Define an event listener that handles a change to paint selection    
    document.addEventListener("change", handlePaintChange);

    // Begin building dropdown to insert info about paint colors from db
    let paintsHTML = `<select id="paintDropdown">
                        <option selected="true" disabled="disabled" value="0">Select A Color</option>`;

    // Use .map() method to copy array pulled from db and add to the dropdown
    let arrayCopy = paints.map((paint) => {
        return `<option value="${paint.id}" name="paint">${paint.color}</option>`;
        }
    )

    // Use .join() method to concatenate dropdown info into a useable dropdown
    paintsHTML += arrayCopy.join("");

    // Close select that holds dropdown
    paintsHTML += "</select>";

    // Return dropdown
    return paintsHTML;
}