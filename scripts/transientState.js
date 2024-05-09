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