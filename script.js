//Assign array of elements password will include
var lowerChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; 
var specialChar = ['!','@','#','$','%','^','&','*','(',')','+','-','=','~','<','>','?'];

function passwordCriteria() {

  var charLength = parseInt(prompt("Please enter a number between 8-128 characters for your new password"));
  
    if (charLength < 8 || charLength > 128) {
      alert("You must choose a number between 8-128. Please try again")
      return;
    } 
  var lowercase = confirm("Do you want lowercase?");
  var uppercase = confirm("Do you want uppercase?");
  var numbers = confirm("Do you want numbers?");
  var specialCharacters = confirm("Do you want special characters?");
  
  // Validate data
    if (charLength === false && lowercase === false && uppercase === false && numbers === false && specialCharacters === false) {
      alert("You must select at least one of the character types");
      return;
    }

  // Store user input
  var userInput = {
    charLength: charLength,
    lowercase: lowercase,
    uppercase: uppercase,
    numbers: numbers,
    specialCharacters: specialCharacters
  };
  return userInput;
}

// Randomize characters
function getRandomChars(arr) {
  var randomIndex = Math.floor(Math.random()*arr.length);
  var randomEl = arr[randomIndex];
  
  return randomEl;
}

//Generate Password
function generatePassword() {
  var inputChars = passwordCriteria();
  var result = [];

  var possibleChars = [];
  var guaranteedChars = [];

  if (inputChars.lowercase) {
    possibleChars = possibleChars.concat(lowerChar);
    guaranteedChars.push(getRandomChars(lowerChar));
  }

  if (inputChars.uppercase) {
    possibleChars = possibleChars.concat(upperChar);
    guaranteedChars.push(getRandomChars(upperChar));
  }

  if (inputChars.numbers) {
    possibleChars = possibleChars.concat(numberChar);
    guaranteedChars.push(getRandomChars(numberChar));
  }

  if (inputChars.specialCharacters) {
    possibleChars = possibleChars.concat(specialChar);
    guaranteedChars.push(getRandomChars(specialChar));
  }

  for (var i = 0; i < inputChars.charLength; i++) {
    var possibleChar = getRandomChars(possibleChars);
    result.push(possibleChar);
  }

  for (var i = 0; i < guaranteedChars.length; i++) {
    result[i] = guaranteedChars[i];
  }
  
  return result.join('');
}

// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}