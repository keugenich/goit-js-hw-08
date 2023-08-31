import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const saveFormState = throttle(() => {
    const formData = {
        email: emailInput.value,
        message: messageInput.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}, 500);

form.addEventListener('input', saveFormState);


document.addEventListener('DOMContentLoaded', () => {
    const savedState = localStorage.getItem('feedback-form-state');
    if (savedState) {
        const formData = JSON.parse(savedState);
        emailInput.value = formData.email || '';
        messageInput.value = formData.message || '';
    }
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = {
        email: emailInput.value,
        message: messageInput.value,
    };


    console.log(formData);


    localStorage.removeItem('feedback-form-state');
    emailInput.value = '';
    messageInput.value = '';
});
