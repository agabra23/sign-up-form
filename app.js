const password = document.getElementById("password");
const confirmItem = document.getElementById("confirm");
const errorItem = document.getElementById("error");
const formItem = document.getElementById("form");
const button = document.getElementById("submit");

function passwordsMatch() {
  if (password.value != confirmItem.value) {
    passwordAlert();
  } else {
    errorItem.innerHTML = "";
    password.classList.remove('alert');
    confirmItem.classList.remove('alert');
  }
}

function passwordAlert() {
  console.log("alerttttt");
  password.classList.add("alert");
  confirmItem.classList.add("alert");
  errorItem.innerHTML = "* Passwords do not match";
}

button.onclick = () => {
  passwordsMatch();
  console.log("clicking");
};

password.onchange = () => {
  passwordsMatch();
};

confirmItem.onchange = () => {
  passwordsMatch();
};
