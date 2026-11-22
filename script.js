const form = document.querySelector('#login-form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const emailError = document.querySelector('#email-error');
const passwordError = document.querySelector('#password-error');
const formMessage = document.querySelector('#form-message');
const togglePassword = document.querySelector('#toggle-password');

togglePassword.addEventListener('click', () => {
  const isHidden = passwordInput.type === 'password';
  passwordInput.type = isHidden ? 'text' : 'password';
  togglePassword.textContent = isHidden ? 'Hide' : 'Show';
  togglePassword.setAttribute('aria-label', isHidden ? 'Hide password' : 'Show password');
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  emailError.textContent = '';
  passwordError.textContent = '';
  formMessage.textContent = '';

  const email = emailInput.value.trim();
  const password = passwordInput.value;
  let isValid = true;

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) {
    emailError.textContent = 'Please enter your email address.';
    isValid = false;
  } else if (!emailPattern.test(email)) {
    emailError.textContent = 'Enter a valid email address.';
    isValid = false;
  }

  if (!password) {
    passwordError.textContent = 'Please enter your password.';
    isValid = false;
  } else if (password.length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters.';
    isValid = false;
  }

  if (isValid) {
    // Demo only: connect this form to your backend/auth provider for real login.
    formMessage.textContent = 'Demo validation successful! No account was authenticated.';
  }
});

document.querySelector('#forgot-link').addEventListener('click', (event) => {
  event.preventDefault();
  formMessage.style.color = '#5558df';
  formMessage.textContent = 'Password reset flow would start here.';
});

document.querySelector('#google-button').addEventListener('click', () => {
  formMessage.style.color = '#5558df';
  formMessage.textContent = 'Connect Google OAuth here to enable sign-in.';
});
