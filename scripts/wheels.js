export const wheels = async () => {
    // Fetch info from db about wheels
    const fetchResponse = await fetch("http://localhost:8088/wheels");
    // Convert info into JS object
    const wheels = await fetchResponse.json();

    // Begin building dropdown
    let wheelHTML = `<select id="wheelDropdown">
                        <option selected="true" disabled="disabled" value="0">Select A Wheel Option</option>`;

    // Use .map() method to build out info in dropdown
    const arrayCopy = wheels.map((wheel) => {
        return `<option value="${wheel.id}">${wheel.wheel}</option>`;
        }
    )

    // Use .join() to concatenate info into useable dropdown
    wheelHTML += arrayCopy.join("");

    // Close select for dropdown
    wheelHTML += `</select>`;

    // Return dropdown
    return wheelHTML;
}