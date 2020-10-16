// allow the description text area to auto expand as user types
$('textarea').each(function () {
    this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
  }).on('input', function () {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
  });

$("#save-btn").on("click", function (event) {
  event.preventDefault();
  console.log("you clicked the save button")
  // make a newCharacter obj
  var newEvent = {

    eventName: $("#eventName").val(),
      
    eventType: $("#eventType").val(),

    guestCount: $("#guestCount").val(),

    eventDate: $("#eventDate").val(),
        
    startTime: $("#startTime").val(),
        
    endTime: $("#endTime").val(),
        
    address: $("#address").val(),
        
    city: $("#city").val(),
        
    state: $("#state").val(),
    zipcode: $("#zipcode").val(),
  };
  console.log(newEvent);
  // send an AJAX POST-request with jQuery
  $.post("/api/customers", newEvent)
    // on success, run this callback
    .then(function (data) {
      // log the data we found
      console.log(data);
    });
    
  // empty each input box by replacing the value with an empty string
  $("#name").val("");
  $("#role").val("");
  $("#age").val("");
  $("#force-points").val("");
})