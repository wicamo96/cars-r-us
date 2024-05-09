import { setWheels } from "./transientState.js";

// Define a function to change the wheelId in the transientState
const handleWheelChange = (changeEvent) => {
    // Check the id in the state of what was clicked
    if (changeEvent.target.id === "wheelDropdown") {
        // Grab id from the state of what was changed and parseInt
        const convertedToInteger = parseInt(changeEvent.target.value);

        // Invoke function defined in the transientState module to change the paintId to the one we just parsed
        setWheels(convertedToInteger);
    }
}

export const wheels = async () => {
    // Fetch info from db about wheels
    const fetchResponse = await fetch("http://localhost:8088/wheels");
    // Convert info into JS object
    const wheels = await fetchResponse.json();

    // Define an event listener that handles a change to wheel selection
    document.addEventListener("change", handleWheelChange);

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