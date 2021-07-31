const inputName = document.getElementById('user_name');
const inputEmail = document.getElementById('user_email');
const inputMessage = document.getElementById('user_message');

const values = [inputName, inputEmail, inputMessage];

function allData() {
  const obj = {};

  for (let i = 0; i < values.length; i += 1) {
    obj[values[i].id] = values[i].value;
  }

  return obj;
}

function setForm() {
  const formData = JSON.parse(localStorage.getItem('form_data'));

  inputName.value = formData.user_name;
  inputEmail.value = formData.user_email;
  inputMessage.value = formData.user_message;
}

function setStorage() {
  localStorage.setItem('form_data', JSON.stringify(allData()));

  setForm();
}

if (!localStorage.getItem('form_data')) {
  setStorage();
} else {
  setForm();
}

inputName.setAttribute('onchange', 'setStorage()');
inputEmail.setAttribute('onchange', 'setStorage()');
inputMessage.setAttribute('onchange', 'setStorage()');
