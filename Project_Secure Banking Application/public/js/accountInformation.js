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
  
 