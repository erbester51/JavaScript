var specialCharacters = [' ', '!', '"', '#', '$', '%', '&', "'", '(',')','*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~']

var Numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(maxLengthPass) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Password details
function generatePassword(){
  var passwordLength = parseInt(
    prompt('How long of a password would you like?')
  );
if (Number.isNaN(passwordLength)) {
   alert('Password length must be a number');
   return null;
 }

 if (passwordLength < 8){
  alert('Password should be at least 8 characters long');
  return null;
 }

 if (passwordLength > 128) {
  alert('Password must be no more than 128 characters long');
  return null;
 }


}