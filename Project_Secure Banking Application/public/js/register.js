$(document).ready(function () {
  nav();
  footer();

  $("#registerForm").html(`
    <div class="row">
      <div class="col-md-6 mb-3">
          <label for="registerFName" class="form-label">First Name</label>
          <input type="text" class="form-control" 
          id="registerFName" 
          name="registerFName" required>
      </div>

      <div class="col-md-6 mb-3">
          <label for="registerLName" class="form-label">Last Name</label>
          <input type="text" class="form-control" 
          id="registerLName" 
          name="registerLName" required>
      </div>
    </div>

    <div class="mb-3">
      <label for="registerEmail" class="form-label">Email</label>
      <input type="email" class="form-control" id="registerEmail" name="registerEmail" placeholder="example@atu.ie" required>
    </div>

    <div class="mb-3">
      <label for="registerphoneNo" class="form-label">Phone No.</label>
      <input type="tel" class="form-control" id="registerphoneNo" name="registerphoneNo" placeholder="+353 564 7891" required>
      <div id="phoneNoError"></div>
    </div>

    <div class="mb-3">
      <label for="registerUsername" class="form-label">Username</label>
      <input type="text" class="form-control" id="registerUsername" name="registerUsername" placeholder="firstname.lastname" required>
      <div id="usernameError"></div>
    </div>

    <div class="mb-3">
      <label for="registerPassword" class="form-label">Password</label>
      <input type="password" class="form-control" id="registerPassword" name="password" required>
      <div id="passwordError"></div>
    </div>

    <div class="mb-3">
      <label for="registerConfirmPassword" class="form-label">Confirm Password</label>
      <input type="password" class="form-control" id="registerConfirmPassword" name="confirmPassword" required>
    </div>
    <div id="confirmPasswordError"></div>

    <br>
    <button type="submit" class="btn btn-primary w-100" id="registerButton">Register</button>
  `);

  // Variable to count number of attempts
  var attempt = 3;

  $("#registerForm").submit(function (e) {
    e.preventDefault();

    var registerFName = $("#registerFName").val();
    var registerLName = $("#registerLName").val();
    var registerEmail = $("#registerEmail").val();
    var registerphoneNo = $("#registerphoneNo").val();
    var registerUsername = $("#registerUsername").val();
    var registerPassword = $("#registerPassword").val();
    var registerConfirmPassword = $("#registerConfirmPassword").val();

    var emailRegEx = /^[a-zA-Z0-9._%+-]+@atu\.ie$/;
    var usernameRegEx = /^[a-zA-Z]{5,15}\.[a-zA-Z]{5,15}$/;
    var passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{9,}$/;
    var phoneNoRegEx = /^(\+353\s?\d{1,3}[\s]?\d{3,4}[\s]?\d{3,4}|\d{10})$/;

    // Validation
    if (!emailRegEx.test(registerEmail)) {
      alert("Invalid Email! Please enter a valid atu.ie email.");
      return false;
    }

    if (!phoneNoRegEx.test(registerphoneNo)) {
      //   $("#registerphoneNo").css("color", "red").focus();
      //   $("#phoneNoError").text("Please enter a valid phone number.").show();
      //   return false;
      // } else {
      //   $("#registerphoneNo").css("color", "black");
      //   $("#phoneNoError").hide();
      // }
      $("#registerForm").append(
        `<div id="invalidLoginMsg" class="alert alert-danger mt-3" role="alert">**Please enter a valid phone number."</div>`
      );
      return;
    }

    if (!usernameRegEx.test(registerUsername)) {
      //   $("#registerUsername").css("color", "red").focus();
      //   $("#usernameError")
      //     .text("Please enter a valid username e.g. firstname.lastname")
      //     .show();
      //   return false;
      // } else {
      //   $("#registerUsername").css("color", "black");
      //   $("#usernameError").hide();
      $("#registerForm").append(
        `<div id="invalidLoginMsg" class="alert alert-danger mt-3" role="alert">**Please enter a valid username e.g. firstname.lastname"</div>`
      );
      return;
    }

    if (!passwordRegEx.test(registerPassword)) {
      //   $("#registerPassword").css("color", "red");
      //   $("#passwordError").text("Please enter a valid password.").show();
      //   return false;
      // } else {
      //   $("#registerPassword").css("color", "black");
      //   $("#passwordError").hide();
      $("#registerForm").append(
        `<div id="invalidLoginMsg" class="alert alert-danger mt-3" role="alert">**Please enter a valid password."</div>`
      );
      return;
    }

    if (!passwordRegEx.test(registerConfirmPassword)) {
      $("#registerConfirmPassword").css("color", "red");
      $("#confirmPasswordError").text("Please enter a valid password.").show();
      return false;
    } else {
      $("#registerConfirmPassword").css("color", "black");
      $("#confirmPasswordError").hide();
    }

    if (registerPassword !== registerConfirmPassword) {
      $("#confirmPasswordError").text("Passwords do not match!").show();
      return false;
    } else {
      $("#confirmPasswordError").hide();
    }

    // Disable register button while processing
    $("#registerButton").prop("disabled", true);

    $.ajax({
      url: "/register", // your backend endpoint
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({
        first_name: registerFName,
        last_name: registerLName,
        email: registerEmail,
        phone_no: registerphoneNo,
        username: registerUsername,
        password: registerPassword,
        balance: 0.0 // starting balance
      }),
      success: function (response) {
        alert(response);
        $("#registerButton").prop("disabled", false);
        location.replace("http://localhost:3000/index.html");
      },
      error: function (xhr, status, error) {
        alert(xhr.responseText);
        $("#registerButton").prop("disabled", false);
      }
    });
  });
});
