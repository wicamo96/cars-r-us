export const interiors = async () => {
    // Fetch info about interiors from db
    const fetchResponse = await fetch("http://localhost:8088/interior");
    // Convert info into JS object
    const interiors = await fetchResponse.json();

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