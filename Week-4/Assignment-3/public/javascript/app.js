const signUpForm = document.getElementById('sign-up-form');
            const signInForm =  document.getElementById('sign-in-form');
            function showSignUpForm(){
                signUpForm.style.display = 'flex';
                signInForm.style.display = 'none';
            }
            function showSignInForm(){
                signUpForm.style.display = 'none';
                signInForm.style.display = 'flex';
            }