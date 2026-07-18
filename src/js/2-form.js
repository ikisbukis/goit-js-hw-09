const KEY_FORM_DATA = "feedback-form-state";

const form = document.querySelector(".feedback-form");

const formData = {
  email: "",
  message: "",
};

const savedData = JSON.parse(localStorage.getItem(KEY_FORM_DATA));

if (savedData) {
  form.elements.email.value = savedData.email || "";
  form.elements.message.value = savedData.message || "";

  formData.email = savedData.email || "";
  formData.message = savedData.message || "";
}

form.addEventListener("input", onFormInput);
form.addEventListener("submit", onFormSubmit);

function onFormInput(event) {
  const field = event.target;

  formData[field.name] = field.value.trim();

  localStorage.setItem(KEY_FORM_DATA, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();

  const { email, message } = event.currentTarget.elements;
  if (
    email.value.trim() === "" ||
    message.value.trim() === ""
  ) {
    alert("Fill please all fields");
    return;
  }
  console.log(formData);

  localStorage.removeItem(KEY_FORM_DATA);
  event.currentTarget.reset();

  formData.email = "";
  formData.message = "";
}