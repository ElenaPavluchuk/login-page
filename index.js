function formatName(text) {
    const firstLtter = text.slice(0,1).toUpperCase();
    const otherLetters = text.slice(1).toLowerCase();
    const formattedName = firstLtter + otherLetters;

    return formattedName;
};

const nameInputElement = document.getElementById("name-input");
const lastNameInputElement = document.getElementById("last-name-input");
const emailInputElement = document.getElementById("email-input");
const passwordInputElement = document.getElementById("password-input");

function handleChangeName(event) {
    const name = event.target.value;
    nameInputElement.setAttribute("value", name);
};

function handleChangeLastName(event) {
    const lastName = event.target.value;
    lastNameInputElement.setAttribute("value", lastName);
};

function handleChangeEmail(event) {
    const email = event.target.value;
    emailInputElement.setAttribute("value", email);
};

function handleChangePassword(event) {
    const password = event.target.value;
    passwordInputElement.setAttribute("value", password);
};

const loginUser = () => {
    nameInputElement.value;
    lastNameInputElement.value;
    emailInputElement.value;
    passwordInputElement.value;
    alert(`Registred: ${formatName(nameInputElement.value)}, ${formatName(lastNameInputElement.value)}, ${emailInputElement.value}, ${passwordInputElement.value}!`);
};