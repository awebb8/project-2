$(document).ready(function() {
    // Getting references to our form and input
    var signUpForm = $("form.signup");
    var firstNameInput = $("input#first-name-input");
    var lastNameInput = $("input#last-name-input");
    var emailInput = $("input#email-input");
    // var passwordInput = $("input#password-input");
  
    // When the signup button is clicked, we validate the email and other inputs are not blank
    signUpForm.on("submit", function(event) {
      event.preventDefault();
      var customerData = {
        first_Name: firstNameInput.val().trim(), 
        last_Name: lastNameInput.val().trim(),
        email: emailInput.val().trim(),
        // password: passwordInput.val().trim()
      };
  
      if (!customerData.email || !customerData.first_Name || !customerData.last_Name) {
        return;
      }
      // If we have an email and other inputs, run the signUpCustomer function
      signUpCustomer(customerData.first_Name, customerData.last_Name, customerData.email);
      firstNameInput.val("");
      lastNameInput.val("");
      emailInput.val("");
    //   passwordInput.val("");
    });
  
    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpCustomer(first_Name, last_Name, email) {
      $.post("/api/customer-signup", {
        first_Name: first_Name,
        last_Name: last_Name,
        email: email,
        // password: password
      })
        .then(function(data) {
          window.location.replace("/customer");
          // If there's an error, handle it by throwing up a Foundation alert
        })
        .catch(handleLoginErr);
    }
  
    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }
});