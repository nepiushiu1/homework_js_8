
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
  const input = document.querySelector('input');
  const texterea = document.querySelector('textarea');


form.addEventListener('input', throttle(onFormData, 500));

const formData = {};
function onFormData(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
storageСheck();


form.addEventListener('submit', cleansingTheForm);
function cleansingTheForm(event) {
  event.preventDefault();
  console.log(formData);
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}


function storageСheck() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  
  if (data) {
    input.value = data.email||'';
    texterea.value = data.message||'';
  }
};







