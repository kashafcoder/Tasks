
const storeHashedPassword = 'd6eb0b4ae727ac968c60b7845da1fce2';


function hashPassword(password) {
const storeHashPassword = md5(password);
return storeHashPassword;
}

// Function to handle login functionality
function login() {
    const usernameElement = document.getElementById("username").value.trim();
    const passwordElement = document.getElementById("password").value.trim();
    const result = document.getElementById("result");

    // Hash the entered password
    const hashEnterPassword = hashPassword(passwordElement);


    // Compare the entered username and hashed password with the stored values.
    if (usernameElement === 'Aptech' && hashEnterPassword === storeHashedPassword) {
        result.textContent = "Login Successful!";
        result.style.color = " green";
    } else {
        result.textContent = "Incorrect credentials. Please try again.";
        result.style.color = " red";
    }
}
