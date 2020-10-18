// $.get("/api/customer-create-event", function (Event) {
//     console.log(Event);
//     console.log(Event[0].address)


// })
$(document).ready(function() {
    let getAllEvents = () =>{
        $.get("/api/customer-profile", function(data){
            console.log(data);
            let oneOfTheseNumbers = data;
            buildEvents(oneOfTheseNumbers);
        });
    }
    let buildEvents = (parameter) => {
        for (var i =0; i <parameter.length; i++) {
            $("#apiCall").append(`<p>Event Name: ${parameter[i].eventName}</p>`)
        }

    } 
    getAllEvents();
})