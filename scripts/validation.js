// Most validation is handled by HTML5 features
// Like input type email automatically checks for valid image 
// And required attribute checks for empty field
// So only password and confirm password matching is handled here.

function validatePasswords() {
  console.log("Method called");

  let pass = document.getElementById("password");
  console.log(pass.value);
  
  let confPass = document.getElementById("confirm-password");
  console.log(confPass.value);

  if (pass.length < 8) {
    alert("Length of password must be greater than 8");
    return false;
  }
  
  if (pass.value === "" || confPass.value === "") {
    alert("Both password and confirm password should not be empty");
    return false;
  }
  
  if (pass.value !== confPass.value) {
    alert("Password and Confirm Password must match");
    return false;
  }

  return true;
}