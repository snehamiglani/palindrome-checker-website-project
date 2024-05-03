function checkAndLoad() {
  // Show the page loader
  document.getElementById('pageLoader').style.display = 'flex';

  //loading delay (1 seconds)
  setTimeout(checkPalindrome, 1000);
}
function checkPalindrome() {
  var textInput = document.getElementById("textInput").value.trim(); 
  var resultText = document.getElementById("resultText");

  if (textInput === "") { // If textarea is empty
      resultText.textContent = "You have not entered any text!";
      resultText.style.color = "white"; 
      resultText.style.backgroundColor = "blue"; 
      document.getElementById('pageLoader').style.display = 'none'; 
      return; 
  }
  // Perform palindrome check
  textInput = textInput.toLowerCase().replace(/[^a-z0-9]/g, '');
  var reversedText = textInput.split('').reverse().join('');

  if (textInput === reversedText) {
      resultText.textContent = "The entered text is Palindrome!";
      resultText.style.color = "white";
      resultText.style.backgroundColor = "green";
  } else {
      resultText.textContent = "The entered text is not Palindrome!";
      resultText.style.color = "white";
      resultText.style.backgroundColor = "red";
  }

  document.getElementById('pageLoader').style.display = 'none'; // Hide loader
}
const textarea = document.getElementById('textInput');
textarea.addEventListener('mouseover', function() {
    textarea.style.borderColor = 'rgb(234, 97, 234)';
    textarea.style.boxShadow = '0 0 10px rgb(255, 73, 255)';
});

textarea.addEventListener('focus', function() {
    textarea.style.borderColor = 'rgb(234, 97, 234)';
    textarea.style.boxShadow = '0 0 10px rgb(255, 73, 255)';
});
textarea.addEventListener('blur', function() {
    textarea.style.borderColor = ''; // Reset border color on blur
    textarea.style.boxShadow = ''; // Reset box shadow on blur
});
const modeToggle = document.getElementById('modeToggle');
const body = document.body;

modeToggle.addEventListener('click', toggleMode);

function toggleMode() {
  body.classList.toggle('dark-mode');
  // Change icon based on mode
  if (body.classList.contains('dark-mode')) {
    modeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // moon icon
  } 
  else {
    modeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // sun icon
  }
}










  
    



