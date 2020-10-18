$(document).ready(function() {
    var loginForm = $("form.login");
    var emailInput = $("input#email-input");
    var userData = {}
    // var passwordInput = $("input#password-input");

    // When the form is submitted, we validate there's an email and password entered
    loginForm.on("submit", function(event) {
        event.preventDefault();
        console.log("Login button clicked");
        userData = {
        email: emailInput.val().trim()
        // password: passwordInput.val().trim()
    };
    if (!userData.email) {
        console.log("there are blank fields");
        return;
    }
  
    // AJAX Call - Checks to see if the user's account is valid
    $.get("/api/user/" + userData.email)
      .then(function (res) {
        $("#userEmail").val("");
        console.log(userData.email);
        window.location.replace("/customer-profile");
        console.log(userData.id);
      })
      .catch(function (err) {
        console.log(err);
      });


      // If we have an email and password we run the loginUser function and clear the form

    //   console.log("loginCustomer function was told to run");
    //   loginCustomer(userData.email);
    //   console.log(userData.email);
    //   emailInput.val("");

      
    });


    // loginUser does a post to our "api/login" route and if successful, redirects us the the vendor page
    // function loginCustomer(email) {
    //     console.log(email)
    //     $.post("/api/user/" + email, {
    //         email: email
    //     })
    //     // $.ajax({
    //     //     type: "POST",
    //     //     url: "/api/login",
    //     //     data: JSON.stringify(email)
    //     // })
    //     .then(function(data) {
    //         console.log(data);
    //         window.location.replace("/customer-profile");
    //         // If there's an error, log the error
    //     })
        
    // }
})