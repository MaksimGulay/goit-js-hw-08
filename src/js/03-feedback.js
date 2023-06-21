import throttle from 'lodash/throttle'

const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const form = document.querySelector('.feedback-form');

const saveFormState = throttle(() => {
    const formState = {
      email: emailInput.value,
      message: messageInput.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formState));
  }, 500);

const restoreFormState = () => {
  const savedState = localStorage.getItem('feedback-form-state');
  if (savedState) {
    const formState = JSON.parse(savedState);
    emailInput.value = formState.email;
    messageInput.value = formState.message;
  }
};

const handleFormSubmit = (event) => {
  event.preventDefault();

  localStorage.removeItem('feedback-form-state');

  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(formState);

  emailInput.value = '';
  messageInput.value = '';

};

emailInput.addEventListener('input', saveFormState);
messageInput.addEventListener('input', saveFormState);

form.addEventListener('submit', handleFormSubmit);

window.addEventListener('load', restoreFormState);

