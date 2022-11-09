const firstName = document.querySelector('#firstNameInput');
const lastName = document.querySelector('#lastNameInput');
const email = document.querySelector('#emailInput');
const password = document.querySelector('#passInput');

const firstNameError = document.querySelector('#firstNameError');
const lastNameError = document.querySelector('#lastNameError');
const emailError = document.querySelector('#emailError');
const passwordError = document.querySelector('#passError');

const button = document.querySelector('#buttonSubmit');

button.addEventListener('click', (event)=> {
    event.preventDefault();
    validateEmpty(firstName, firstNameError, 'First name cannot be empty.');
    validateEmpty(lastName, lastNameError, 'Last name cannot be empty.');
    validateEmail(email, emailError);
    validateEmpty(password, passwordError, 'Password cannot be empty.');
});

function validateEmpty(inputName, inputError, stringInput){
    let inputNameValue = inputName.value;
    if (inputNameValue.length == 0){
        // mostramos error
        showError(inputName, inputError, stringInput);
    }else{
        // ocultamos error
        hideError(inputName, inputError);
    }
    

}

function validateEmail(inputEmail, inputError){
    let regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
    if (regExp.test(inputEmail.value)){
        // ocultamos error
        hideError(inputEmail, inputError);
    }else{
        // mostramos error
        showError(inputEmail, inputError, 'Looks be a valid a email');
        
    };
}

function showError(divInput, divError, divString){
    divInput.style.border = '1px solid var(--Red)';
    divError.innerHTML = `<img class="icon-error" src="./images/icon-error.svg" alt="icon error">
            <p class="error">${divString}</p>`;
}

function hideError(divInput, divError){
    divInput.style.border = '1px solid var(--Grayish_Blue)';
    divError.innerHTML = ``;
}