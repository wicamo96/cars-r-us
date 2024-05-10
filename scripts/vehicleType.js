import { setType } from "./transientState.js";

const handleVehicleType = (changeEvent) => {
    if (changeEvent.target.id === 'typeDropdown') {
        const convertedToInteger = parseFloat(changeEvent.target.value);

        setType(convertedToInteger);
    }
}

export const vehicleType = () => {
    document.addEventListener("change", handleVehicleType)

    return `<select id='typeDropdown'>
                <option selected='true' disabled='disabled' value='0'>Select A Vehicle Type</option>
                <option name='type' value=1'>Car</option>
                <option name='type' value='1.5'>SUV</option>
                <option name='type' value='2.25'>Truck</option>
            </select>`
}