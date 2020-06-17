// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  console.log(password);
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  //define variables that can make up password
  let pass = [];
  let upperCase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let lowerCase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

  //define array for password
  let passwordOptions = [];
  let passwordText = [];
  let passwordLength = prompt(
    "how many characters between 8 and 128 shall your password be?"
  );
  //console.log(typeof passwordLength);
  passwordLength = parseInt(passwordLength);

  // for (let i = 0; i < passwordLength; i++) {
  //console.log(i);
  //}
  if (passwordLength > 7 && passwordLength < 129) {
    //let array = passwordOptions;
    //array.length = passwordLength;
  } else {
    alert("enter a password length between 8 and 128 characters");
  }

  let confirmUpperCase = confirm("Would you like any upper case letters?");
  if (confirmUpperCase) {
    pass = pass.concat(upperCase);
    //var randomIndexUpper = Math.floor(Math.random() * upperCase.length);
    //console.log(upperCase[randomIndexUpper]);
    //passwordOptions.push(upperCase[randomIndexUpper]);
  }
  let confirmLowerCase = confirm("Would you like any lower case letters?");
  if (confirmLowerCase) {
    pass = pass.concat(lowerCase);
    //var randomIndexLower = Math.floor(Math.random() * lowerCase.length);
    //console.log(lowerCase[randomIndexLower]);
    //passwordOptions.push(lowerCase[randomIndexLower]);
    //passwordOptions.push(lowerCase[randomIndexLower]);
  }
  //pass = pass.concat(lowerCase);

  let confirmNumber = confirm("Would you like any numbers?");
  if (confirmNumber) {
    //var randomIndexNumber = Math.floor(Math.random() * number.length);
    //console.log(number[randomIndexNumber]);
    //passwordOptions.push(number[randomIndexNumber]);
    pass = pass.concat(number);
  }

  let confirmSpecChar = confirm("Would you like any special characters?");
  if (confirmSpecChar) {
    pass = pass.concat(specChar);
    //var randomIndexSpecChar = Math.floor(Math.random() * specChar.length);
    //console.log(specChar[randomIndexSpecChar]);
    //passwordOptions.push(specChar[randomIndexSpecChar]);
  }
  console.log(pass);
  for (let i = 0; i < passwordLength; i++) {
    //console.log(pass);
    passwordText.push(pass[Math.floor(Math.random() * pass.length)]);
  }
  //console.log(i);
  //console.log(character);

  console.log(passwordText);
  passwordOptions.length = passwordLength;

  return passwordText.join("");
}
generateBtn.addEventListener("click", writePassword);
