// Set up the transient state data structure and provide initial values
const transientState = {
    "paintId": 0,
    "interiorId": 0,
    "wheelsId": 0,
    "technologyId": 0
}

// Functions that modify each property of transient state
export const setPaint = (chosenPaint) => {
    transientState.paintId = chosenPaint;
    console.log(transientState);
}

export const setInterior = (chosenInterior) => {
    transientState.interiorId = chosenInterior;
    console.log(transientState);
}

export const setWheels = (chosenWheels) => {
    transientState.wheelsId = chosenWheels;
    console.log(transientState);
}

export const setTechnology = (chosenTechnology) => {
    transientState.technologyId = chosenTechnology;
    console.log(transientState);
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