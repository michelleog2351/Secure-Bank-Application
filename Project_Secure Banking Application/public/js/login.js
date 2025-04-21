$(document).ready(function () {
  nav();
  footer();

  $("#loginForm").html(`
		<div class="mb-3">
			<label for="email" class="form-label">Email</label>
			<input type="email" class="form-control" id="loginEmail" name="loginEmail" placeholder="example@atu.ie" required>
		</div>

		<div class="mb-3">
			<label for="password" class="form-label" >Password</label>
			<input type="password" class="form-control" id="loginPassword" name="loginPassword" required>
		</div>

		<div class="mb-3 form-check">
					<input type="checkbox" class="form-check-input" id="rememberMe">
					<label class="form-check-label" for="rememberMe">Remember Me</label>
		</div>
		<br>
	<button type="submit" class="btn btn-primary w-100" id="loginButton">Login</button>`);
});

var attempt = 3;

// Login validation
$("#loginButton").on("submit", function (e) {
  e.preventDefault();

  var loginEmail = $("#loginEmail").val().trim();
  var loginPassword = $("#loginPassword").val().trim();

  var emailRegEx = /^[a-zA-Z]{5,15}\.[a-zA-Z]{5,15}$/;
  var passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{9,}$/;

  if (!emailRegEx.test(loginEmail)) {
    // alert("Invalid Username! Please try again! e.g. firstname.lastname");
    $("#loginForm").append(
      `<div id="invalidLoginMsg" class="alert alert-danger mt-3" role="alert">**Invalid Username! Please try again! e.g. firstname.lastname</div>`
    );
    return;
  }

  if (!passwordRegEx.test(loginPassword)) {
    //alert("Invalid password! Please try again!");
    $("#loginForm").append(
      `<div id="invalidLoginMsg" class="alert alert-danger mt-3" role="alert">**Invalid password! Please try again!</div>`
    );
    return;
  }

  $.post("/login", { loginEmail, loginPassword })
    .done(function (response) {
      // success → redirect
      sessionStorage.setItem("login", "true");
      window.location.href = "/index.html";
    })
    .fail(function () {
      attempt--;
      $("#loginForm").append(
        `<div id="invalidLoginMsg" class="alert alert-danger mt-3" role="alert">Login failed. You have ${attempt} attempts left.</div>`
      );

      if (attempt === 0) {
        $("#loginEmail, #loginPassword, #loginButton").prop("disabled", true);
      }
      return false;
    });
  // }
});
