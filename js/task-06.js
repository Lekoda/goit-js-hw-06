const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', checkDataLength);

function checkDataLength(event) {
    const length = parseInt(inputEl.getAttribute('data-length'));
    const enteredLength = inputEl.value.length;
    if (enteredLength === length) {
        inputEl.classList.add('valid');  
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.add('invalid');  
        inputEl.classList.remove('valid');

    }
};
