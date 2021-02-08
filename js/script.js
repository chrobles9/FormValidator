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
      // Corrects the second password displayed to the user from passwordConfirm to Password
      if (input.id === "passwordConfirm") {
        showError(input, `Password is required`);
      } else {
        showError(input, `${capitalizeInputName(input)} is required`);
      }
    } else {
      showSuccess(input);
    }
  });
}

// Capitalize first letter of input id name
function capitalizeInputName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Check username for the required length of 4 to 15 characters
function checkUserName(input, min, max){
  if(input.value.length < min && input.value.length >0){
    showError(input, `${capitalizeInputName(input)} must be at least 4 characters`);
  }else if (input.value.length > max){
    showError(input, `${capitalizeInputName(input)} must less than 15 characters`);
  }
}



// Event Listener on form's submit button
form.addEventListener("submit", function (e) {
  // Need to prevent default form submission in order to interception form input for validation
  e.preventDefault();

  // Check form for blank input from user 
  checkBlank(formData);
  // Check username for the required length of 4 to 15 characters
  checkUserName(username, 4, 15);


});
