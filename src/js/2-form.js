
const KEY_FORM_DATA = "feedback-form-state";

const formData = {
    email: "",
    message: ""
};

const form = document.querySelector(".feedback-form");
const button = document.querySelector("button")
const saveData = JSON.parse(localStorage.getItem(KEY_FORM_DATA));

if(saveData) {
    form.elements.email.value = saveData.email || "";
    form.elements.message.value = saveData.message || "";

    formData.email = saveData.email || "";
    formData.message = saveData.message || "";
}

form.addEventListener("input", formFunc);

function formFunc(event) {
    const field = event.target;

    formData[field.name] = field.value.trim();
    localStorage.setItem(KEY_FORM_DATA, JSON.stringify(formData))
}

form.addEventListener("submit", formSubmit) 

function formSubmit(event) {
    event.preventDefault();
    localStorage.removeItem(KEY_FORM_DATA);
    form.reset();

    formData.email = "";
    formData.message = "";
}