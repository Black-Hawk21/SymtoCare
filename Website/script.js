document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.querySelector('.login-btn');
    const registerBtn = document.querySelector('.register-btn');
    const loginWrapper = document.querySelector('.login-wrapper');
    const registerWrapper = document.querySelector('.register-wrapper');
    const closeBtns = document.querySelectorAll('.close-btn');
    const switchForms = document.querySelectorAll('.switch-form');
    const registerForm = document.querySelector('.register-container form');
    const registerPassword = document.getElementById('registerPassword');
    const confirmRegisterPassword = document.getElementById('confirmRegisterPassword');

    console.log("Script loaded");

    // Open Login Wrapper
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            loginWrapper.style.display = 'block';
        });
    }

    // Open Register Wrapper
    if (registerBtn) {
        registerBtn.addEventListener('click', () => {
            registerWrapper.style.display = 'block';
        });
    }

    // Close Wrappers
    if (closeBtns.length > 0) {
        closeBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.target.closest('.login-wrapper, .register-wrapper').style.display = 'none';
            });
        });
    }

    // Switch Forms
    if (switchForms.length > 0) {
        switchForms.forEach(switchForm => {
            switchForm.addEventListener('click', (e) => {
                e.preventDefault();
                if (switchForm.textContent === 'Register') {
                    loginWrapper.style.display = 'none';
                    registerWrapper.style.display = 'block';
                } else {
                    registerWrapper.style.display = 'none';
                    loginWrapper.style.display = 'block';
                }
            });
        });
    }

    // Validate Password Matching
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            const password = registerPassword.value;
            const confirmPassword = confirmRegisterPassword.value;

            if (validate(password, confirmPassword)) {
                e.preventDefault();
                confirmRegisterPassword.setCustomValidity('Passwords do not match'); // Set custom validation message
            } else {
                confirmRegisterPassword.setCustomValidity(''); // Reset validation message
            }
        });

        // Reset custom validation message on input change
        confirmRegisterPassword.addEventListener('input', () => {
            confirmRegisterPassword.setCustomValidity('');
        });
    }
});
