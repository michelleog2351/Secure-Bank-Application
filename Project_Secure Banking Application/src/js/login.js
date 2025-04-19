$(document).ready(function () {
  nav();
  footer();

  $("#loginForm").append(`
    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <input type="email" class="form-control" id="loginEmail" name="loginEmail" placeholder="example@atu.ie" required>
    </div>

    <div class="mb-3">
      <label for="password" class="form-label" >Password</label>
      <input type="password" class="form-control" id="loginPassword" name="password" required>
    </div>
    
    <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="rememberMe">
          <label class="form-check-label" for="rememberMe">Remember Me</label>
    </div>  
    <br>
  <button type="submit" class="btn btn-primary w-100" id="loginButton">Login</button>`);
});

var attempt = 3; // Variable to count number of attempts

// Login validation
$("#loginButton").click(function () {
  var loginEmail = $("#loginEmail").val();
  var loginPassword = $("#loginPassword").val();

  var emailRegEx = /^[a-zA-Z]{5,15}\.[a-zA-Z]{5,15}$/;
  var passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{9,}$/;

  if (!emailRegEx.test(loginEmail)) {
   // alert("Invalid Username! Please try again! e.g. firstname.lastname");
    `<div id="invalidLoginMsg" class="alert alert-danger mt-3" role="alert">**Invalid Username! Please try again! e.g. firstname.lastname</div>`
    return false;
  } 

  if (!passwordRegEx.test(loginPassword)) {
    //alert("Invalid password! Please try again!");
        `<div id="invalidLoginMsg" class="alert alert-danger mt-3" role="alert">**Invalid password! Please try again!</div>`
    return false;
  }

  if (username === "adams.apple" && password === "Password#123") {
    alert("Login successfully");
    window.location = "index.html";
    return false;
  } else {
    attempt--;
    alert("You have left " + attempt + " attempts.");

    if (attempt === 0) {
      $("#loginEmail, #loginPassword, #loginButton").prop("disabled", true);
    }
    return false;
  }
});
