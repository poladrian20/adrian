const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2'); // Not used in login, but kept if needed
const togglePassword = document.getElementById('toggle-password');

// ✅ Correct credentials (update as needed)
const correctUsername = "admin123"; 
const correctEmail = "admin@example.com";
const correctPassword = "password123";


// 🚀 Form validation & redirection
form.addEventListener('submit', e => {
    e.preventDefault();
    
    if (validateInputs()) { // Only proceed if validation is successful
        const usernameValue = username.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();

        if (usernameValue === correctUsername && emailValue === correctEmail && passwordValue === correctPassword) {
            window.location.href = "dashboard.html"; // ✅ Redirect if correct
        } else {
            alert("Invalid login credentials. Please check your username, email, and password.");
        }
    }
});

// 👁️ Toggle password visibility
togglePassword.addEventListener('click', () => {
    if (password.type === 'password') {
        password.type = 'text';
        togglePassword.innerHTML = '<i class="fa-regular fa-eye-slash"></i>';
    } else {
        password.type = 'password';
        togglePassword.innerHTML = '<i class="fa-regular fa-eye"></i>';
    }
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};

// ✅ Validate input fields
const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    let isValid = true;

    if (usernameValue === '') {
        setError(username, 'Username is required');
        isValid = false;
    } else if (usernameValue.length < 3) {
        setError(username, 'Username must be at least 3 characters.');
        isValid = false;
    } else {
        setSuccess(username);
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
        isValid = false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
        isValid = false;
    } else {
        setSuccess(email);
    }

    if (passwordValue === '') {
        setError(password, 'Password is required');
        isValid = false;
    } else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 characters.');
        isValid = false;
    } else {
        setSuccess(password);
    }

    return isValid;
};
