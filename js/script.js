// Get document elements 
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('passwordConfirm');
const formData = [username, email, password, passwordConfirm];

// Shows input error 
function showError(input, message){
  const formControl = input.parentElement;
  // creates new class for formControl div 
  formControl.className = 'formControl error';

  // create a new variable for the span error message 
  const errorMessage = formControl.querySelector('span');
  errorMessage.innerText = message;
}

// Show green outline around successful input 
function showSuccess(input){
  const formControl = input.parentElement;
  formControl.className = 'formControl success';
}


function checkBlank(input){
  // Check for blank input 
  formData.forEach(function (input){
    if(input.value.trim() === ''){
      showError(input, `${input.value} is required`);
      console.log(input);
    }else{
      showSuccess(input);
    }
  });
}






// Event Listener on form's submit button 
form.addEventListener('submit', function(e){
  // Need to prevent default form submission in order to interception form input for validation
  e.preventDefault(); 

checkBlank(formData);




})