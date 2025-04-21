$(document).ready(function () {
    nav();
    footer();
  
    $("#fbody").append(`
    <label class="form-label" for="email">Email</label>
    <input class="form-control" type="email" id="email" name="email" placeholder="example@atu.ie" required>
  
    <label class="form-label" for="password">Password</label>
    <input class="form-control" type="password" id="password" name="password" required>
    <br>
    <button class="btn btn-primary" id="login">Login</button>`);
  });
  
  var attempt = 3; // Variable to count number of attempts
  
  // Login validation
  $("#submit").click(function () {
    var username = $("#username").val();
    var password = $("#password").val();
  
    var usernameRegEx = /^[a-zA-Z]{5,15}\.[a-zA-Z]{5,15}$/;
    var passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{9,}$/;
  
    if (!usernameRegEx.test(username)) {
      alert("Invalid Username! Please try again! e.g. firstname.lastname");
      return false;
    }
  
    if (!passwordRegEx.test(password)) {
      alert("Invalid password! Please try again!");
      return false;
    }
  
    if (username === "adams.apple" && password === "Password#123") {
      alert("Login successfully");
      window.location = "success.html";
      return false;
    } else {
      attempt--;
      alert("You have left " + attempt + " attempts.");
  
      if (attempt === 0) {
        $("#username, #password, #submit").prop("disabled", true);
      }
      return false;
    }
  });
  
  // Email validation
  $("#emailSubmit").click(function () {
    var emailEntered = $("#email").val();
    var emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
  
    if (!emailRegEx.test(emailEntered)) {
      alert(
        "Invalid Email! Please enter a valid email format (e.g., email@email.com)."
      );
      return false;
    }
  
    if (emailEntered === "student@atu.ie") {
      alert("This is a valid email address");
      window.location = "home.html";
      return false;
    } else {
      attempt--;
      alert("Incorrect Email, You have left " + attempt + " attempt;");
  
      if (attempt === 0) {
        $("#email, #emailSubmit").prop("disabled", true);
      }
      return false;
    }
  });
  