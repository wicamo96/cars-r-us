export const technologies = async () => {
    // Fetch data from db about technologies
    const fetchResponse = await fetch("http://localhost:8088/technology");
    // Convert data to JS object
    const technologies = await fetchResponse.json();

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