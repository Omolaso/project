const form = document.getElementById("form");
const nameField = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!nameField.value || !email.value || !password.value) return;

  if (Number.isInteger(nameField.value)) return;

  if (!email.value.endsWith(".com")) return;

  finalSubmit();
});

const finalSubmit = () => {
  nameField.value = "";
  email.value = "";
  password.value = "";
  console.log("Submitted");
};
