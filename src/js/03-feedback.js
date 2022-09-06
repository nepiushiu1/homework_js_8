
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
  const input = document.querySelector('input');
  const texterea = document.querySelector('textarea');
  let formData = {};
  storageСheck();
form.addEventListener('input', throttle(onFormData, 500));


function onFormData(event) {
  formData[event.target.name] = event.target.value;
  
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}



form.addEventListener('submit', cleansingTheForm);


function cleansingTheForm(event) {
  event.preventDefault();
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));

if(data){
  console.log(data);
}

  // console.log(formData);
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
  formData={}
}


function storageСheck() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  
  if (data) {
    // formData = JSON.parse(data);
    input.value = data.email||'';
    texterea.value = data.message||'';
  }
};







