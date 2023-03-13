const password = form.password.value;
const confirmItem = form.confirm.value;
const errorItem = document.getElementById("error");
const formItem = document.getElementById("form");
const button = document.getElementById("submit");

function passwordsMatch() {
  if (password != confirmItem) {
    passwordAlert();
  }
  console.log("passwordsmatch");
}

function passwordAlert() {
  console.log('alerttttt')
    errorItem.innerHTML = "* Passwords do not match";
}

button.onclick = () => {
  passwordsMatch();
  console.log("clicking");
};
