//Assignment code here

// All variables defined for parts of the password
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var special = "!@#$%^&*()_+-={}[]|\\:;\"'<>,.?/";

//Prompts for all conditions of the password such as uppercase, lowercase, numbers, characters, and legth

function getPasswordLength() {
  var length = parseInt(prompt("How many characters should the password contain? (must be between 8 and 128)"));
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Invalid. Choose a number between 8 and 128.");
    return getPasswordLength();
  }
  return length;
}

function getPasswordCharacters() {
  var useLowercase = confirm("Include lowercase characters?");
  var useUppercase = confirm("Include uppercase characters?");
  var useNumeric = confirm("Include numeric characters?");
  var useSpecial = confirm("Include special characters?");
  if (!useLowercase && !useUppercase && !useNumeric && !useSpecial) {
    alert("You must select at least one character type.");
    return getPasswordCharacters();
  }
  var charset = "";
  if (useLowercase) {
    charset += lowercase;
  }
  if (useUppercase) {
    charset += uppercase;
  }
  if (useNumeric) {
    charset += numeric;
  }
  if (useSpecial) {
    charset += special;
  }
  return charset;
}

// function to generate password using the variables selected by user
function generatePassword() {
  var length = getPasswordLength();
  var charset = getPasswordCharacters();
  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
