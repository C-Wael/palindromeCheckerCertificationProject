const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result")

const inputCheckout = () => {

    const regex = /[^a-zA-Z0-9]/g;
    const beforeInput = textInput.value;
    if (textInput.value === "") {
        alert("Please input a value");
    } else{
        textInput.value = textInput.value.toLowerCase().replace(regex, "");
    };

    if (textInput.value === textInput.value.split("").reverse().join("")) {
       result.innerHTML = `${beforeInput} is a palindrome.`;
    } else {
        result.innerHTML = `${beforeInput} is not a palindrome.`;
    };
}

checkButton.addEventListener("click", inputCheckout);