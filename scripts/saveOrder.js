import { saveCarOrder } from "./transientState.js";

// Define a function to handle submit order button click
const handleOrderSubmissionClick = (clickEvent) => {
    if (clickEvent.target.id === 'saveOrder') {
        saveCarOrder();
    }
}

// Define a function that holds the event listener for submit order button click and holds html for the submit order button
export const saveOrder = () => {
    document.addEventListener("click", handleOrderSubmissionClick);

    return `<button id="saveOrder">Submit Car Order</button>`;
}