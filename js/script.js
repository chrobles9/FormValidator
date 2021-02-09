// Get document elements
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("passwordConfirm");
const formData = [username, email, password, passwordConfirm];

// Shows input error
function showError(input, message) {
  const formControl = input.parentElement;
  // creates new class for formControl div
  formControl.className = "formControl error";
  // create a new variable for the span error message
  const errorMessage = formControl.querySelector("span");
  errorMessage.innerText = message;
}

// Show green outline around successful input
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "formControl success";
}

// Check for blank input from user
function checkBlank(input) {
  formData.forEach(function (input) {
    if (input.value.trim() === "") {
      // Corrects the second password error message displayed to the user from "passwordConfirm is required" to "Password is required"
      correctErrorMessages(input);
    } else {
      showSuccess(input);
    }
  });
}

// Capitalize first letter of input id name
function capitalizeInputName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Corrects the second password error message displayed to the user from "passwordConfirm is required" to "Password is required"
function correctErrorMessages(input) {
  if (input.id === "passwordConfirm") {
    showError(input, "Password is required");
  } else {
    showError(input, `${capitalizeInputName(input)} is required`);
  }
}

function checkInputLength(input, min, max) {
  if (input.value.length < min && input.value.length > 0) {
    if (input.id === "passwordConfirm") {
      // Corrects the second password error message displayed to the user from "passwordConfirm must be at least ${min} characters" to "Password must be at least ${min} characters"
      showError(input, `Password must be at least ${min} characters`);
    } else{
    showError(
      input,
      `${capitalizeInputName(input)} must be at least ${min} characters`
    );}
  } else if (input.value.length > max) {
    if (input.id === "passwordConfirm") {
      // Corrects the second password error message displayed to the user from "passwordConfirm must be at least ${min} characters" to "Password must be at least ${min} characters"
      showError(input, `Password must be less than ${max} characters`);
    } else{
    showError(
      input,
      `${capitalizeInputName(input)} must less than ${max} characters`
    );}
  }
}

// Use JavaScript to validate email input from user instead of HTML5 built in feature
function checkEmail(input) {
  const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (input.value.trim() === "") {
    // Corrects the email error message to show "Email is required" for blank input from user instead of "Enter a valid email address"
    showError(input, "Email address is required");
  } else if (validEmail.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Enter a valid email address");
  }
}


// TODO: Confirm Passwords match






// Event Listener on form's submit button
form.addEventListener("submit", function (e) {
  // Need to prevent default form submission in order to interception form input for validation
  e.preventDefault();

  // Check form for blank input from user
  checkBlank(formData);
  // Check input for the required length of characters
  checkInputLength(username, 4, 15);
  // Check both password lengths for the required length
  checkInputLength(password, 6, 20);
  checkInputLength(passwordConfirm, 6, 20);
  // Check email input for valid email address
  checkEmail(email);


});
