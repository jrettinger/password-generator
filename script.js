// Assignment Code
// Query Selectors
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Variables for the letters, numbers & special characters
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";
var totalChars = "lowerCase+upperCase+numbers+specialCharacters";
var passwordLength = "";

// Write password to the #password input
function generatePassword () {
var totalChars = ""
var password = ""
var passwordLength = document.getElementById("number").innerHTML;
passwordText.value = password;
// Alert user about series of questions determining password
function generatePassword() {
  alert("Welcome to the Password Generator. You will be asked a series of questions to help generate a random password.")
}
// User prompt to select the amount of characters for their password 
var passwordLengthUser = prompt("How many characters would you like the password to be? Password MUST be between 8-128 characters.")
if (passwordLength<8){
  alert("Password length must be between 8-128 characters");
  determineLength();
}else if (passwordLength>128){
  alert("Password length must be between 8-128 characters");
  determineLength();

  return "Generated password";
}
function writePassword() {



<script>
  // Password Criteria
    var passwordLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");
    var lowerCase = confirm("Do you want your password to contain lowercase letters?");
    var upperCase = confirm("Do you want your password to contain uppercase letters?");
    var numbers = confirm("Do you want your password to contain numbers?");
    var specialCharacters = confirm("Do you want your password to contain special characters?");



if(passwordLength >= 8 && passwordLength <= 128){
for(var i = 0; i < passwordLength; i++){
password += totalChars[i];
}
}



document.getElementById("demo").innerHTML = "password is " + password;
</script>

  var password = generatePassword();
  

  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


