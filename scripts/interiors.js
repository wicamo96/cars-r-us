import { setInterior } from "./transientState.js";

// Define a function that changes interiorId in transient state
const handleInteriorChange = (changeEvent) => {
    // Check the id in the state of what was clicked
    if (changeEvent.target.id === 'interiorDropdown') {
        // Grab id from the state of what was changed and parseInt
        const convertedToInteger = parseInt(changeEvent.target.value);

        // Invoke function defined in the transientState module to change the paintId to the one we just parsed
        setInterior(convertedToInteger)
    }
}

export const interiors = async () => {
    // Fetch info about interiors from db
    const fetchResponse = await fetch("http://localhost:8088/interior");
    // Convert info into JS object
    const interiors = await fetchResponse.json();

    // Define an event listener that handles a change to interior selection
    document.addEventListener("change", handleInteriorChange);

    // Begin building a dropdown
    let interiorHTML = `<select id="interiorDropdown">
                            <option selected="true" disabled="disabled" value="0">Select Interior Option</option>`;

    // Use .map() method to copy array pulled from db and add to the dropdown                            
    const arrayCopy = interiors.map((interior) => {
            return `<option value="${interior.id}">${interior.fabric}</option>` ;
        }
    )
    
    // Use .join() method to concatenate dropdown info into a useable dropdown 
    interiorHTML += arrayCopy.join("");

    // Close select for dropdown
    interiorHTML += `</select>`;

    // Return dropdown
    return interiorHTML;
}