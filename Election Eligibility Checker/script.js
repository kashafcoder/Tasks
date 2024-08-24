function votingEligibility() {
  let inputElement = document.querySelector("#input-age").value;
  let age = parseInt(inputElement);
  let messageElement = document.getElementById("message");

  if (isNaN(age)) 
  {
    messageElement.textContent = "Please Enter a valid age.";
    messageElement.style.color = "red";
  } 
  else 
  {
    if (age >= 18) {
      messageElement.textContent = "Congratulations! You are eligible to vote.";
      messageElement.style.color = "green";
    } else {
      messageElement.textContent = "Sorry, you are not eligible to vote.";
      messageElement.style.color = "red";
    }
  }

  window.setTimeout(function () {
    messageElement.textContent = " ";
  }, 2000);
  
}
