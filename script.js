const form = document.querySelector("#form");
const submitButton = document.querySelector(".submit-button");

const first_name = document.querySelector(".first_name");
const last_name = document.querySelector(".last_name");
const email = document.querySelector(".email");
const phone_number = document.querySelector(".phone_number");
const password = document.querySelector(".password");
const confirmPassword = document.querySelector(".confirm_password");
const errorMessage = document.querySelector(".error-message");
const successMessage = document.querySelector(".success-message");

phone_number.addEventListener("blur", function (e) {
  console.log("event happened" + phone_number.value);
  if (phone_number.value.length == 10) {
    let newPhoneNumber = formatNumber(phone_number.value);
    console.log("new number:" + newPhoneNumber);
  }
});

submitButton.addEventListener("click", (e) => {
  console.log(first_name);
  document.querySelector(":root").style.setProperty("--color-invalid", "red");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isFormValid = validation();
  if (!isFormValid) {
    e.preventDefault();
    return;
  }
  showSuccessMessage();
  resetForm(e);
});

function validation() {
  if (password.value != confirmPassword.value) {
    errorMessage.textContent = "Passwords do not match";
    errorMessage.style.display = "block";

    return false;
  } else {
    return true;
  }
}

function showSuccessMessage() {
  alert("Success");
  successMessage.textContent = "Successfully created!";
  successMessage.style.display = "block";
  setTimeout(() => {
    successMessage.style.display = "none";
  }, "3000");
}
function resetForm(event) {
  event.target.reset();
  document.querySelector(":root").style.setProperty("--color-invalid", "grey");
  errorMessage.style.display = "none";
}
function formatNumber(n) {
  let newNum = n.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
  phone_number.value = newNum;
  return newNum;
}
