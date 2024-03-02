const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result")

const emptyInput = () => {
    if (textInput.textContent === "") {
        alert("Please input a value");
    }
};