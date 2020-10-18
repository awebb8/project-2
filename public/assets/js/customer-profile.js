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
        for (var i = 0; i < parameter.length; i++) {  
            $("#apiCall").append(`
            <tr>
            <td>${parameter[i].eventName}</td>
            <td>${parameter[i].eventDate}</td>
            <td>${parameter[i].startTime}</td>
            <td>${parameter[i].endTime}</td>
            <td>${parameter[i].eventType}</td>
            <td>${parameter[i].GuestCount}</td>
            <td id ="descriptionInfo"> Click for more info </td>
            <td>${parameter[i].city},${parameter[i].state},${parameter[i].zipCode}</td>
            </tr>`)
        }
    } 
    getAllEvents();
})