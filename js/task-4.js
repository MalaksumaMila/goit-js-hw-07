
const formLogin = document.querySelector(".login-form")

formLogin.addEventListener('submit', (event) => {
    event.preventDefault();

  const elements = event.currentTarget.elements;
  const email = elements.email.value.trim();
  const password = elements.password.value.trim();

    if (email === '' || password === '') {
    alert('All form fields must be filled in');
    return;
  }

   const formData = {
    email,
    password,
  };
console.log(formData);

formLogin.reset();
});
