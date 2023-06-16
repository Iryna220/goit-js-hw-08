import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('form'),
    emailEl: document.querySelector('input'),
    textarea: document.querySelector('textarea'),
};

const STORAGE_KEY = 'feedback-form-state';

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput, 500));

populateTextarea();

function onFormSubmit(evt) {
    evt.preventDefault();

    if (refs.emailEl.value === '' || refs.textarea.value === '') {
       return alert('Заповніть всі поля, будь-ласка'); 
    }
    console.log({
        email: refs.emailEl.value.toLocaleLowerCase().trim(),
        message: refs.textarea.value,
    })
    localStorage.removeItem(STORAGE_KEY);

    evt.currentTarget.reset();
};

function onTextareaInput() {
    const onInputObj = {
        email: refs.emailEl.value.toLocaleLowerCase().trim(),
        message: refs.textarea.value,
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(onInputObj));
};


function populateTextarea() {
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    const { email, message } = savedMessage;
    if (savedMessage) {
        refs.emailEl.value = email || '';
        refs.textarea.value = message || '';
    };
}

