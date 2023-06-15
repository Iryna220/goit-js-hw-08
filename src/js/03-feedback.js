import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
};

const STORAGE_KEY = 'feedback-form-state';

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

populateTextarea();

function onFormSubmit(evt) {
    evt.preventDefault();
    console.log('Відправити форму');
    localStorage.removeItem(STORAGE_KEY);

    evt.currentTarget.reset();
};

function onTextareaInput(evt) {
    const message = evt.target.value;
    localStorage.setItem(STORAGE_KEY, message);
};


function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    if (savedMessage) {
        console.log(savedMessage);
    }
        refs.textarea.value = savedMessage;
    
}

