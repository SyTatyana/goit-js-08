const throttle = require('lodash.throttle');
const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const text = document.querySelector('textarea');
autoLookText();
let formData = {};
form.addEventListener('input', throttle(slowTextTime, 1000));
function slowTextTime() {
  formData = {
    email: input.value,
    message: text.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function autoLookText() {
  const saveText = localStorage.getItem('feedback-form-state');
  const parseText = JSON.parse(saveText);
  if (saveText) {
    input.value = parseText.email;
    text.value = parseText.message;
  }
}

form.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();
  const inputEmail = e.currentTarget.elements.email.value;
  const area = text.value;
  const obj = {
    email: inputEmail,
    message: area,
  };
  console.log(obj);
  localStorage.removeItem('feedback-form-state');
  form.reset();
}
