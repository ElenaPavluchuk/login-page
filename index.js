const nameInputElement = document.getElementById("name-input");

function formatName(text) {
    const firstLtter = text.slice(0,1).toUpperCase();
    const otherLetters = text.slice(1).toLowerCase();
    const formattedName = firstLtter + otherLetters;

    return formattedName;
}

function handleChangeName(event) {
    const name = event.target.value;
    nameInputElement.setAttribute("value", name);
};

function handleChangeLastName(event) {
    const lastName = event.target.value;
    const lastNameInputElement = document.getElementById("last-name-input");
    lastNameInputElement.setAttribute("value", lastName);
};

const loginUser = () => {
    const nameInputElement = document.getElementById("name-input");
    console.log("name input element: ", nameInputElement.value);
    alert(`Registred: ${formatName(nameInputElement.value)}!`);
};