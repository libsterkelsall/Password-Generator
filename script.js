// Assignment Code

// VARIABLES
// Instructions for first popup box alert
var instructions = "This Password Generator will prompt you to enter a desired length between 8 and 128 characters and what character types you want me to draw from.  \n\nProceed?"

//For minimum length of password
var minLengthPassword = (8);

//For selecting length of password
var selectLength

//Places range of possible character types in arrays
var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lcLettersArray = ["a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z"];
var ucLettersArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specCharacArray = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "_", "-", "+", "=", "|", "(", ")", "{", "}", "[", "]", ": ", "; ", "'", "<", ">", ",", ".", "?", "/"]
console.log(numbersArray)
//for Array to be built from selected range of arrays above
var selectedArray

//for selecting and validating which arrays will be used
var selectNumbers
var selectLcLetters
var selectUcLetters
var selectSpecCharac

//for password
var password

//java stuff
var generateBtn = document.querySelector("#generate");

//-----------------------------------------------------------------------------------------------------

// FUNCTIONS & METHODS

// Future Enhancement: Process user input on desired length of password to ensure is over 8
//Future Enhancment: DRY-er build of array of selected character types


//Generate password of selected length from selected character types 
function generatePassword() {
  for (var i = 1; i <= selectLength; i++) {
    password =
            selectedArray(Math.floor(Math.random() * Math.floor(selectedArray.length)));
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



//-----------------------------------------------------------------------------------------------------

// CALLS FOR ACTION !

// display initial instructions in first popup box on browser & require confirmation to proceed
alert(instructions);

// display second popup box to prompt user to enter desired length of password
selectLength = prompt("Please insert a length of password of at least 8 characters and no more than 128");

//display third popup box to alert user to selected length & require confirmation of that length
alert("You want a password that is " + selectLength + " characters long. \r\r Confirm with OK");

// display fourth popup box to prompt user to select whether number character types to be included for generation of password
selectNumbers = confirm("Do you want number characters included in the range from which we build your Password? \r\rConfirm with OK");

//if selected above, display fifth popup box to alert user with a random number example and require validation
if (selectNumbers == true) {
  confirm("You have selected number characters like \'4\' to be included in your password. \r\rConfirm with OK");
  //if validated add number characters to selected array for password generator
  if (this.confirm == true) {
    selectedArray.push(...numbersArray);
    console.log(selectedArray);
  }
}

// display sixth popup box to prompt user to select whether lower case letter character types to be included for generation of password
selectLcLetters = confirm("Do you want lower case letter characters included in the range from which we build your Password? \r\rConfirm with OK");

//if selected above, display seventh popup box to alert user with a random lower case letter example and require validation
if (selectLcLetters == true) {
  confirm("You have selected lower case letters characters like \'g\' to be included in your password. \r\rConfirm with OK");
  //if validated add lower case letter characters to selected array for password generator
  if (this.confirm == true) {
    selectedArray.push(...lcLettersArray);
    console.log(selectedArray);
  }
}

// display eighth popup box to prompt user to select whether upper case letter character types to be included for generation of password
selectUcLetters = confirm("Do you want upper case letter characters included in the range from which we build your Password?\r\rConfirm with OK");

//display ninth popup box to alert user with a random upper case letter example and require validation
if (selectUcLetters == true) {
  confirm("You have selected upper case letter characters like \'G\' to be included in your password. \r\rConfirm with OK");
  //if validated add upper case letter characters to selected array for password generator
  if (this.confirm == true) {
    selectedArray.push(...ucLettersArray);
    console.log(selectedArray);
  }
}

// display tenth popup box to prompt user to select whether special character types to be included for generation of password
selectSpecCharac = confirm("Do you want special characters included in the range from which we build your Password? \r\rConfirm with OK");

//display seventh popup box to alert user with a random special character example and require validation
if (selectSpecCharac == true) {
  confirm("You have selected special characters like \'%\' to be included in your password. \r\rConfirm with OK");
  //if validated add special characters to selected array for password generator
  if (this.confirm == true) {
    selectedArray.push(...specCharacArray);
    console.log(selectedArray);
  }
}






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// generate password

//display password

//option to repeat