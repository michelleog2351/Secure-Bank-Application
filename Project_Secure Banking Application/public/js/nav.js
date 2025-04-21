function nav() {
  var isLoggedIn = sessionStorage.getItem("login") === "true";
  var role = sessionStorage.getItem("role");

  var navOutPut = `
                  <div class="container-fluid">
                      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> 
                        <span class="navbar-toggler-icon"></span>
                      </button>

                  <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav w-100 d-flex align-items-center list-unstyled" style="padding: 15px;">			  
                                  <li class="nav-item">
                                    <a class="nav-link" href="index.html">Home</a>
                                  </li>`;

  if (isLoggedIn) {
    if (role === "superadmin") {
      navOutPut += `
                  <li class="nav-item">
                    <a class="nav-link" href="adminDetails.html">Admin Details</a>
                  </li>`;
    }

    if (role === "customer") {
      navOutPut += `
                  <li class="nav-item">
                    <a class="nav-link" href="accountInformation.html">My Account Information</a>
                  </li>`;
    }

    if (isLoggedIn) {
      navOutPut += `
                    <li class="nav-item">
                        <button class="btn btn-danger" id="logout">Logout</button>
                    </li>`;
    } else {
      navOutPut += `
                    <li class="nav-item">
                      <a class="nav-link" href="register.html">Register</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="login.html">Login</a>
                    </li>`;
    }
  }
  navOutPut += `</ul></div></div>`;
  $("nav").html(navOutPut);

  // let currentPath = window.location.pathname.split("/").pop();

  // // Breadcrumb container selector
  // let breadcrumbContainer = $("#breadcrumb");

  // // Define breadcrumb mapping
  // let breadcrumbMap = {
  //   "index.html": "Home",
  //   "accountInformation.html": "My Account Information",
  //   "login.html": "Login",
  //   "register.html": "Register",
  // };

  // // Check if the current page exists in the breadcrumb map
  // if (breadcrumbMap[currentPath]) {
  //   let breadcrumbHTML = `
  //         <nav aria-label="breadcrumb">
  //           <ol class="breadcrumb">
  //             <li class="breadcrumb-item"><a href="index.html">Home</a></li>
  //             <li class="breadcrumb-item active" aria-current="page">${breadcrumbMap[currentPath]}</li>
  //           </ol>
  //         </nav>
  //       `;

  //   // Inject the breadcrumb into the breadcrumb container
  //   breadcrumbContainer.html(breadcrumbHTML);
  // }

  $("#logout").click(function (e) {
    e.preventDefault();
    sessionStorage.removeItem("login");
    location.replace("/index.html");
  });
}

// styling for highlighting the active page
$(document).ready(function () {
  // Get the current page path from the browser's URL
  let currentPath = window.location.pathname;
  $(".navbar-nav .nav-link").each(function () {
    // Convert relative href to an absolute URL and extract the pathname
    let linkPath = new URL($(this).attr("href"), window.location.origin)
      .pathname;

    // extract the folder of the current path i.e. /Theatre for /Theatre/Theatre.html
    let currentFolder = currentPath.substring(
      0,
      currentPath.lastIndexOf("/") + 1
    );
    let linkFolder = linkPath.substring(0, linkPath.lastIndexOf("/") + 1);

    // Check if the current page exactly matches the link,
    // if the current page is a subpage of the link (e.g., `/Theatre/createTheatre.html` under `/Theatre/`),
    // or if both the current page and the link belong to the same folder.
    // If any of these conditions are met, add the "active" class to highlight the link.
    if (
      currentPath === linkPath ||
      currentPath.startsWith(linkPath) ||
      currentFolder === linkFolder
    ) {
      $(this).addClass("active");
    }
  });

  // when the active link is clicked
  $(".navbar-nav .nav-link").click(function (e) {
    e.preventDefault();
    let newUrl = $(this).attr("href");

    // Remove active from all the links and add to the clicked link
    $(".navbar-nav .nav-link").removeClass("active");
    $(this).addClass("active");

    // Delay navigation to let the sliding underline animation complete
    // makes loading page less shaky
    setTimeout(function () {
      window.location.href = newUrl;
    }, 250);
  });
});

$(document).ready(function () {
  // Get the current page file name (e.g., "login.html")
  let currentPath = window.location.pathname.split("/").pop();

  // Loop through all navigation links
  $("nav a").each(function () {
    // Compare the href attribute of each link with the current page
    if ($(this).attr("href") === currentPath) {
      // Add 'active' class to highlight the current page
      $(this).addClass("active");
    }
  });
});
