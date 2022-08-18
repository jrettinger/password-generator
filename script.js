// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"

// Write password to the #password input
function writePassword() {

<p id="number">91</p>
<p id="demo"></p>

<script>
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var passwordLength = document.getElementById("number").innerHTML;
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";
var totalChars = lowerCase+uppercaseChar+numberChar+specialChar;
var password = "";

if(passwordLength >= 8 && passwordLength <= 128){
for(var i = 0; i < passwordLength; i++){
password += totalChars[i];
}
}


document.getElementById("demo").innerHTML = "password is " + password;
</script>

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


