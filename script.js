const form = document.getElementById("form");
const nameField = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!nameField.value || !email.value || !password.value) return;

  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  numbers.map((number) => {
    if (nameField.value.includes(number)) {
      return;
    }
  });

  finalSubmit();
});

const finalSubmit = () => {
  nameField.value = "";
  email.value = "";
  password.value = "";
  console.log("Submitted");
};
