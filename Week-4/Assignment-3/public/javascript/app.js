const signUpForm = document.querySelector('#sign-up-form');
const signUpUsername = document.querySelector('#sign-up-username');
const signUpEmail = document.querySelector('#sign-up-email');
const signUpPassword = document.querySelector('#sign-up-password');

const signInForm = document.querySelector('#sign-in-form');
const signInEmail = document.querySelector('#sign-in-email');
const signInPassword = document.querySelector('#sign-in-password');

function showSignUpForm(){
    signUpForm.style.display = 'flex';
    signInForm.style.display = 'none';
}
function showSignInForm(){
    signUpForm.style.display = 'none';
    signInForm.style.display = 'flex';
}

function checkSignUpFormValidation() {
    if (signUpUsername.validity.valid && signUpEmail.validity.valid && signUpPassword.validity.valid) {
        return true;
    } else {
        return false;
    }
}

function checkSignInFormValidation() {
    if (signInEmail.validity.valid && signInPassword.validity.valid) {
        return true;
    } else {
        return false;
    }

}
signUpForm.addEventListener('submit', (e) => {
    if (!checkSignUpFormValidation) {
        e.preventDefault();
     }
});

signInForm.addEventListener('submit', (e) => {
    if (!checkSignInFormValidation) {
        e.preventDefault();
     }
})
