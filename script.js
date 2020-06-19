//Assign array of elements password will include
var PasswordMax = [1,2,3,4,5,5,6,7,8,9]
var lowerChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; 
var specialChar = ['!','@','#','$','%','^','&','*','(',')','+','-','=','~','<','>','?'];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Functions
// for(var i = 0; i < PasswordMax.length; i++){}

function generatePassword() {

  var lowerCharsIndex = Math.floor(Math.random()*lowerChar.length);
  var upperCharsIndex = Math.floor(Math.random()*upperChar.length);
  var numberCharsIndex = Math.floor(Math.random()*numberChar.length);
  var specialCharsIndex = Math.floor(Math.random()*specialChar.length);

  var charLength = prompt("Please enter a number between 8-128 characters for your new password");
    if (charLength < 8 || charLength > 128) {
      alert("You must choose a number between 8-128. Please try again")
      return false;
    }

  var lowercase = confirm("Do you want lowercase?");
    if (lowercase) {
      for (var i = 0; i < lowerChar.length; i++) {
        var lowerChars = lowerChar[lowerCharsIndex];
      }
      console.log(lowerChars);
    }

  var uppercase = confirm("Do you want uppercase?");
    if (uppercase) {
      var upperChars = upperChar[upperCharsIndex];
      console.log (upperChars);
    }

  var numbers = confirm("Do you want numbers?");
    if (numbers) {
      var numberChars = numberChar[numberCharsIndex];
      console.log (numberChars);
    }

  var specialCharacters = confirm("Do you want special characters?");
  if (specialCharacters) {
    var specialChars = specialChar[specialCharsIndex];
    console.log (specialChars);
  }
}

