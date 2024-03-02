const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result")

const emptyInput = () => {
    if (textInput.value === "") {
        alert("Please input a value");
    }
};


checkButton.addEventListener("click", emptyInput)