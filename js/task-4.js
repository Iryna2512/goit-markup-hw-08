const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const register = event.target;
  const email = register.elements.email.value.trim();
  const password = register.elements.password.value.trim();

  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }
  const user = {
    email,
    password,
  };

  console.log(user);

  form.reset();
});
