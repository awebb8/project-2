// $(document).ready(function() {
//     // This file just does a GET request to figure out which user is logged in
//     // and updates the HTML on the page
//     $.get("/api/vendor_data").then(function(data) {
//       $(".vendor-name").text(data.email);
//     });
// });

$(document).ready(function() {
  let getAllEvents = () =>{
      $.get("/api/customer-profile", function (data) {
          console.log(data);
          let oneOfTheseNumbers = data;
          buildEvents(oneOfTheseNumbers);
      });
  }

  let buildEvents = (parameter) => {
      for (var i = 0; i < parameter.length; i++) {  

          let eventDescription = parameter[i].description

          
          $("#apiCall").append(`
          <tr>
          <td>${parameter[i].eventName}</td>
          <td>${parameter[i].eventDate.substring(0,10)}</td>
          <td>${parameter[i].startTime}</td>
          <td>${parameter[i].endTime}</td>
          <td>${parameter[i].eventType}</td>
          <td>${parameter[i].guestCount}</td>
          <td>${parameter[i].city},${parameter[i].state},${parameter[i].zipCode}</td>
          <td>
          <button class ="alert button" id ="${parameter[i].id}"> Not Interested </button></td>
          </tr>`)

          $(".holy-grail-left").append(`
          <h4> Event Description:</h4><p>${eventDescription}</p>`)

          $(".alert").on("click", handleEventDelete);

          function handleEventDelete() {
              var selectedEvent= $(this).attr("id")
              console.log(selectedEvent)
            deletePost(selectedEvent);
          }

          function deletePost(id) {
              $.ajax({
                method: "DELETE",
                url: "/api/customer-profile/" + id
              })
                .then(function() {
                  console.log("success")
                  location.reload();
                });
            }
      }



  } 
  getAllEvents();

  let getCustomerProfile = () => {
      $.get("/api/customer-signup", function (data) {
          console.log(data);
          let customerData = data;
          updateProfile(customerData);
      });
  }

  let updateProfile = (parameter) => {
      for (var i = 0; i < parameter.length; i++) {  
          $("#profile-section").append(`
          <h4>${parameter[i].first_Name} ${parameter[i].last_Name}</h4>
          <p>Email: ${parameter[i].email}</p>
          `)
      }
  } 
  getCustomerProfile();




})