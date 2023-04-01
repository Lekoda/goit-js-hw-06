
const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', onSubmit);


function onSubmit(evt) {
    evt.preventDefault();
    const { email, password } = evt.currentTarget.elements;
    
    const mailInput = email.value;
    const pswInput = password.value;
    if (!mailInput || !pswInput) {
        alert('все поля должны быть заполнены');
    }

    const dataObject = {
    mail: email.value,
    password: password.value,
    }
    console.log(dataObject);
    formEl.reset();
};

