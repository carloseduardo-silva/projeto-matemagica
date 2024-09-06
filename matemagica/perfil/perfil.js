const passwordInput = document.getElementById('senha');
const togglePasswordBtn = document.getElementById('toggle-password-btn');

toggleButton.addEventListener('click', () => {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    console.log('click')
  } else {
    passwordInput.type = 'password';
    console.log('click')
  }
});