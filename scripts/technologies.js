import { setTechnology } from "./transientState.js";

// Define a function to change the wheelId in the transientState
const handleTechnologyChange = (changeEvent) => {
    // Check the id in the state of what was clicked
    if (changeEvent.target.id === 'technologyDropdown') {
        // Grab id from the state of what was changed and parseInt
        const convertedToInteger = parseInt(changeEvent.target.value);
        // Invoke function defined in the transientState module to change the paintId to the one we just parsed
        setTechnology(convertedToInteger);
    }
}

export const technologies = async () => {
    // Fetch data from db about technologies
    const fetchResponse = await fetch("http://localhost:8088/technologies");
    // Convert data to JS object
    const technologies = await fetchResponse.json();

    // Define an event listener that handles a change to technology selection    
    document.addEventListener("change", handleTechnologyChange);

    // Begin building a dropdown
    let technologyHTML = `<select id="technologyDropdown">
                            <option selected="true" disabled="disabled" value="0">Select A Technology Package</option>`;

    // Use .map() method to copy array pulled from db and add to the dropdown 
    let arrayCopy = technologies.map((technology) => {
            return `<option value="${technology.id}">${technology.package}</option>`;
        }
    )

    // Use .join() method to concatenate the arrayCopy into a useable dropdown
    technologyHTML += arrayCopy.join("");

    // Close select for dropdown
    technologyHTML += `</select>`;

    // Return dropdown
    return technologyHTML;
}