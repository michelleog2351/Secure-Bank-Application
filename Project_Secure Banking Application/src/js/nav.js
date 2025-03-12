function nav() {
  var navOutPut = `
      <div class="container d-flex justify-content-center"> 
          <ul class="navbar-nav" style="padding: 15px 15px 15px 15px">
              <li class="nav-item">
                  <a class="nav-link" href="../../index.html">Home</a>
              </li>

             
      `;
  // if (sessionStorage.getItem("login") == "true") {
  //   navOutPut += `
  //         <li class="nav-item">
  //         <a class="nav-link" href="/admin.html">Admin</a>
  //         </li> |
  //         <li class="nav-item">
  //         <a class="nav-link" href="/logout.html">Logout</a>
  //         </li> |`;
  // } else {
  //   navOutPut += `<li class="nav-item">
  //         <a class="nav-link" href="login.html">Login</a>
  //         </li>`;
  // }
  navOutPut += `</ul></div>`;
  $("nav").html(navOutPut);
}
