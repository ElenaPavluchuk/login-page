function formatName(text) {
    const firstLtter = text.slice(0,1).toUpperCase();
    const otherLetters = text.slice(1).toLowerCase();
    const formattedName = firstLtter + otherLetters;

    return formattedName;
}

function handleChangeName(event) {
    const name = event.target.value;
    const nameInputElement = document.getElementById("name-input");
    nameInputElement.setAttribute("value", name);
};

function handleChangeLastName(event) {
    const lastName = event.target.value;
    const lastNameInputElement = document.getElementById("last-name-input");
    lastNameInputElement.setAttribute("value", lastName);
};

function handleChangeEmail(event) {
    const email = event.target.value;
    const emailInputElement = document.getElementById("email-input");
    emailInputElement.setAttribute("value", email);
}

function handleChangePassword(event) {
    const password = event.target.value;
    const passwordInputElement = document.getElementById("password-input");
    passwordInputElement.setAttribute("value", password);
}

const loginUser = () => {
    const nameInputElement = document.getElementById("name-input");
    console.log("name input element: ", nameInputElement.value);
    const lastNameInputElement = document.getElementById("last-name-input");
    console.log("last name input element: ", lastNameInputElement.value);
    const emailInputElement = document.getElementById("email-input");
    console.log("email input element", emailInputElement.value);
    const passwordInputElement = document.getElementById("password-input");
    console.log("password input element", passwordInputElement.value);
    alert(`Registred: ${formatName(nameInputElement.value)}, ${formatName(lastNameInputElement.value)}, ${emailInputElement.value}!`);
};