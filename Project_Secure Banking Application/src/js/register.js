$(document).ready(function () {
  nav();
  footer();

  $("#registerForm").append(`
      <div class="row">
    <div class="col-md-6 mb-3">
        <label for="registerFName" class="form-label">First Name</label>
        <input type="text" class="form-control" id="registerFName" name="registerFName" required>
    </div>

    <div class="col-md-6 mb-3">
        <label for="registerLName" class="form-label">Last Name</label>
        <input type="text" class="form-control" id="registerLName" name="registerLName" required>
    </div>
</div>

      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="registerEmail" name="registerEmail" placeholder="example@atu.ie" required>
      </div>

      <div class="mb-3">
        <label for="phoneNo" class="form-label">Phone No.</label>
        <input type="tel" class="form-control" id="registerphoneNo" name="registerphoneNo" placeholder="+353 564 7891" required>
      </div>

      <div class="mb-3">
        <label for="username" class="form-label">Username</label>
        <input type="text" class="form-control" id="registerUsername" name="registerUsername" placeholder="firstname.lastname" required>
      </div>
  
      <div class="mb-3">
        <label for="password" class="form-label" >Password</label>
        <input type="password" class="form-control" id="registerPassword" name="password" required>
      </div>

      <div class="mb-3">
        <label for="password" class="form-label">Confirm Password</label>
        <input type="password" class="form-control" id="registerConfirmPassword" name="confirmPassword" required>
      </div>
    <br>
    <button type="submit" class="btn btn-primary w-100" id="registerButton">Register</button>`);
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


$("#registerForm").on("submit", function (e) {
    let password = $("#registerPassword").val();
    let confirmPassword = $("#registerConfirmPassword").val();

    if (password !== confirmPassword) {
      e.preventDefault(); // Prevent form submission
      $("#passwordError").show(); // Show error message
    } else {
      $("#passwordError").hide(); // Hide error message if they match
    }
});

// Email validation
// $("#emailSubmit").click(function () {
//   var emailEntered = $("#email").val();
//   var emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;

//   if (!emailRegEx.test(emailEntered)) {
//     alert(
//       "Invalid Email! Please enter a valid email format (e.g., email@email.com)."
//     );
//     return false;
//   }

//   if (emailEntered === "student@atu.ie") {
//     alert("This is a valid email address");
//     window.location = "home.html";
//     return false;
//   } else {
//     attempt--;
//     alert("Incorrect Email, You have left " + attempt + " attempt;");

//     if (attempt === 0) {
//       $("#email, #emailSubmit").prop("disabled", true);
//     }
//     return false;
//   }
// });
