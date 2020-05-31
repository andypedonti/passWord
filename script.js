// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 

function writePassword () {
  const birthCity = prompt("what city were you born in");

  confirm = prompt("what was the name of your first pet?");
  confirm = prompt("what is your favorite holiday?")
}

