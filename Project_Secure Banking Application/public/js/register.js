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

  // Handle input validation dynamically (show errors on blur or input events)
  $("input").on("blur", function () {
    validateInput($(this));
  });

  // Validate input fields
  function validateInput(input) {
    const id = input.attr("id");
    const value = input.val();

    switch (id) {
      case "registerEmail":
        validateEmail(value);
        break;
      case "registerphoneNo":
        validatePhone(value);
        break;
      case "registerUsername":
        validateUsername(value);
        break;
      case "registerPassword":
        validatePassword(value);
        break;
      case "registerConfirmPassword":
        validateConfirmPassword(value);
        break;
      // Add other cases for more fields if necessary
    }
  }

  // Email validation
  function validateEmail(value) {
    var emailRegEx = /^[a-zA-Z0-9._%+-]+@atu\.ie$/;
    if (!emailRegEx.test(value)) {
      showError("#registerEmail", "Please enter a valid atu.ie email.");
    } else {
      hideError("#registerEmail");
    }
  }

  // Phone validation
  function validatePhone(value) {
    var phoneNoRegEx =
      /^(\+\d{1,4}[\s]?\d{1,4}[\s]?\d{1,4}|\d{3}[\s]?\d{3}[\s]?\d{4})$/;
    if (!phoneNoRegEx.test(value)) {
      showError("#registerphoneNo", "Please enter a valid phone number.");
    } else {
      hideError("#registerphoneNo");
    }
  }

  // Username validation
  function validateUsername(value) {
    var usernameRegEx = /^[a-zA-Z]{3,20}\.[a-zA-Z]{3,20}$/;
    if (!usernameRegEx.test(value)) {
      showError(
        "#registerUsername",
        "Please enter a valid username (e.g., firstname.lastname)."
      );
    } else {
      hideError("#registerUsername");
    }
  }

  // Password validation
  function validatePassword(value) {
    var passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{9,}$/;
    if (!passwordRegEx.test(value)) {
      showError(
        "#registerPassword",
        "Password must be at least 9 characters long, with a mix of letters, numbers, and special characters."
      );
    } else {
      hideError("#registerPassword");
    }
  }

  // Confirm password validation
  function validateConfirmPassword(value) {
    var password = $("#registerPassword").val();
    if (value !== password) {
      showError("#registerConfirmPassword", "Passwords do not match!");
    } else {
      hideError("#registerConfirmPassword");
    }
  }

  // Show error alert below input
  function showError(inputId, message) {
    $(inputId).after(`<div class="alert alert-danger mt-2">${message}</div>`);
  }

  // Hide error alert
  function hideError(inputId) {
    $(inputId).siblings(".alert-danger").remove();
  }

  // Form submission handler
  $("#registerForm").submit(function (e) {
    e.preventDefault();

    var registerFName = $("#registerFName").val();
    var registerLName = $("#registerLName").val();
    var registerEmail = $("#registerEmail").val();
    var registerphoneNo = $("#registerphoneNo").val();
    var registerUsername = $("#registerUsername").val();
    var registerPassword = $("#registerPassword").val();

    // Validation check for all fields
    if (
      $("#registerEmail").siblings(".alert-danger").length ||
      $("#registerphoneNo").siblings(".alert-danger").length ||
      $("#registerUsername").siblings(".alert-danger").length ||
      $("#registerPassword").siblings(".alert-danger").length ||
      $("#registerConfirmPassword").siblings(".alert-danger").length
    ) {
      return; // If any errors are present, don't submit form
    }

    // Disable the submit button while processing
    $("#registerButton").prop("disabled", true);

    $.ajax({
      url: "/register", // Your backend endpoint
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({
        first_name: registerFName,
        last_name: registerLName,
        email: registerEmail,
        phone_no: registerphoneNo,
        username: registerUsername,
        password: registerPassword,
        balance: 0.0, // Starting balance
      }),
      success: function (response) {
        alert(response);
        $("#registerButton").prop("disabled", false);
        location.replace("http://localhost:3000/index.html");
      },
      error: function (xhr, status, error) {
        alert(xhr.responseText);
        $("#registerButton").prop("disabled", false);
      },
    });
  });
});
