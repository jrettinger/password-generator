// Assignment code here
var generateBtn = document.querySelector("#generate");

function writePassword() {
  // TODO: code goes here

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var numbers = '0123456789';
  var lowercase = 'abdefghijklmnopqrstuvwxyz';
  var uppercase = 'ABDEFGHIJKLMNOPQRSTUVWXYZ';
  var specialCharacters = '@!#$%^&*]+';
  var potentialCharacters = '';



  // Prompt & user input
  var numberOfCharacters = prompt("Please choose your password. It MUST be between 8 - 128 characters.");
  if (numberOfCharacters < 8 || numberOfCharacters > 128) {
    alert("Your password must be between 8 - 128 characters.");
    generatePassword();
  }
//  Does user want? Confirm, if so
  var yesLowercase = confirm("Do you want your password to contain lowercase characters?");
  var yesUppercase = confirm("Do you want your password to contain uppercase characters?");
  var yesNumbers = confirm("Do you want your password to contain numbers?");
  var yesSpecialCharacters = confirm("Do you want your password to contain special characters?");

  if (yesLowercase === false && yesUppercase === false && yesNumbers === false && yesSpecialCharacters === false) {
    alert("Please select at least one character type.");
  };

  // Character selection
  if (yesLowercase) {
    potentialCharacters = potentialCharacters.concat(lowercase);
  }
  if (yesUppercase) {
    potentialCharacters = potentialCharacters.concat(uppercase);
  }
  if (yesNumbers) {
    potentialCharacters = potentialCharacters.concat(numbers);
  }
  if (yesSpecialCharacters) {
    potentialCharacters = potentialCharacters.concat(specialCharacters);
  }
 
  // Randomized Password
  let finalPassword = ""
  for (let i = 0; i < numberOfCharacters; i++) {
  var randomDecimal = Math.random();
  var firstIndexPosition = randomDecimal * potentialCharacters.length;
  var finalIndexPosition = Math.floor (firstIndexPosition);
  var finalCharacter = potentialCharacters.charAt(finalIndexPosition);
    
    // let rng =[Math.floor(Math.random() * potentialCharacters.length)];
    // or finalPassword += potentialCharacters[rng];
    finalPassword = finalPassword + finalCharacter;
  }
  return finalPassword;
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);