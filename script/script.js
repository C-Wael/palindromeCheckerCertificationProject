const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result")

const inputCheckout = () => {

    const regex = /[^a-z]/g;
    if (textInput.value === "") {
        alert("Please input a value");
    } else {
        textInput.value = textInput.value.replace(regex, " ");
    };

    if (textInput.value === textInput.value.split("").reverse().join("")) {
       result.innerHTML = `${textInput.value} is a palindrome.`;
    } else {
        result.innerHTML = `${textInput.value} is not a palindrome.`;
    };
}

checkButton.addEventListener("click", inputCheckout);