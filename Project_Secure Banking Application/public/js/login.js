$(document).ready(function () {
  nav();
  footer();

  $("#loginForm").html(`
    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <input type="email" class="form-control" id="loginEmail" name="loginEmail" placeholder="example@atu.ie" required>
    </div>

    <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <input type="password" class="form-control" id="loginPassword" name="loginPassword" required>
    </div>

    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="rememberMe">
      <label class="form-check-label" for="rememberMe">Remember Me</label>
    </div>
    <br>
    <button type="submit" class="btn btn-primary w-100" id="loginButton">Login</button>
  `);

  // Variable to count number of attempts
  var attempt = 3;

  $("#loginForm").on("submit", function (e) {
    e.preventDefault();

    // Clear any previous
    $("#invalidLoginMsg").remove();

    var loginEmail = $("#loginEmail").val().trim();
    var loginPassword = $("#loginPassword").val().trim();

    var emailRegEx = /^[a-zA-Z0-9._%+-]+@atu\.ie$/;
    var passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{9,}$/;

    if (!emailRegEx.test(loginEmail)) {
      $("#loginForm").append(
        `<div id="invalidLoginMsg" class="alert alert-danger mt-3" role="alert">**Invalid email! Please enter a valid atu.ie email."</div>`
      );
      return;
    }

    if (!passwordRegEx.test(loginPassword)) {
      $("#loginForm").append(
        `<div id="invalidLoginMsg" class="alert alert-danger mt-3" role="alert">**Invalid password! Please try again!</div>`
      );
      return;
    }

    // If valid, attempt login
    $.post("/login", { loginEmail, loginPassword })
      .done(function (response) {
        sessionStorage.setItem("login", "true");
        location.replace("http://localhost:3000/index.html");
      })
      .fail(function () {
        attempt--;
        $("#loginForm").append(
          `<div id="invalidLoginMsg" class="alert alert-danger mt-3" role="alert">Login failed. You have ${attempt} attempts left.</div>`
        );

        if (attempt === 0) {
          $("#loginEmail, #loginPassword, #loginButton").prop("disabled", true);
        }
      });
  });
});
