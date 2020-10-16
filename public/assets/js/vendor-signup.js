$(document).ready(function() {
    // Getting references to our form and input
    var signUpForm = $("form.signup");
    var businessNameInput = $("input#business-name-input");
    var categorySelect = $("#category-select");
    var firstNameInput = $("input#first-name-input");
    var lastNameInput = $("input#last-name-input");
    var emailInput = $("input#email-input");
    // var passwordInput = $("input#password-input");
  
    // When the signup button is clicked, we validate the email and other inputs are not blank
    signUpForm.on("submit", function(event) {
      event.preventDefault();
      var vendorData = {
        business_Name: businessNameInput.val().trim(),
        category: categorySelect.val(),
        first_Name: firstNameInput.val().trim(), 
        last_Name: lastNameInput.val().trim(),
        email: emailInput.val().trim(),
        // password: passwordInput.val().trim()
      };
  
      if (!vendorData.email || !vendorData.business_Name || !vendorData.category || !vendorData.first_Name || !vendorData.last_Name) {
        return;
      }
      // If we have an email and other inputs, run the signUpVendor function
      signUpVendor(vendorData.business_Name, vendorData.category, vendorData.first_Name, vendorData.last_Name, vendorData.email);
      businessNameInput.val("");
      categorySelect.val("");
      firstNameInput.val("");
      lastNameInput.val("");
      emailInput.val("");
    //   passwordInput.val("");
    });
  
    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpVendor(business_Name, category, first_Name, last_Name, email) {
      $.post("/api/vendor-signup", {
        business_Name: business_Name,
        category: category,
        first_Name: first_Name,
        last_Name: last_Name,
        email: email,
        // password: password
      })
        .then(function(data) {
          window.location.replace("/vendor");
          // If there's an error, handle it by throwing up a Foundation alert
        })
        .catch(err => console.log(err));
    }
  
    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }
});