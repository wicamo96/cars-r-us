// Set up the transient state data structure and provide initial values
const transientState = {
    "paintsId": 0,
    "interiorsId": 0,
    "wheelsId": 0,
    "technologiesId": 0,
    "vehicleTypeId": 0
}

// Functions that modify each property of transient state
export const setPaint = (chosenPaint) => {
    transientState.paintsId = chosenPaint;
    console.log(transientState);
}

export const setInterior = (chosenInterior) => {
    transientState.interiorsId = chosenInterior;
    console.log(transientState);
}

export const setWheels = (chosenWheels) => {
    transientState.wheelsId = chosenWheels;
    console.log(transientState);
}

export const setTechnology = (chosenTechnology) => {
    transientState.technologiesId = chosenTechnology;
    console.log(transientState);
}

export const setType = (chosenType) => {
    transientState.vehicleTypeId = chosenType;
    console.log(transientState)
}

// Function to convert transient state to permanent state
export const saveCarOrder = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    const response = await fetch("http://localhost:8088/orders", postOptions);

    const customEvent = new CustomEvent("newOrderCreated");
    document.dispatchEvent(customEvent);
}