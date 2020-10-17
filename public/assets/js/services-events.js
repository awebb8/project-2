$(document).ready(function () {

    var newService = []

    $("#addServicesBtn").on("click", function (event) {
        event.preventDefault();
        console.log("you clicked add");
    
        var newServiceItem = $("#selectServices").val ()
        var newListEl = $("<ul>");
        var newListItem = $("<li>");
        var newTextSize = $("<h6>");
    
        newTextSize.text(newServiceItem);
        newListItem.append(newTextSize);
        newListEl.append(newListItem);
        
        newListEl.addClass("chosen-service");
        $("#chosen-service").append(newListEl)
        newService.push(newServiceItem);
        console.log(newService);
    })
    
    $("#createServices").on("click", function (event, newService) {
        event.preventDefault();
        console.log("you clicked submit");
        createNewServices(newService);
    });
    function createNewServices(newServiceItem) {
        $.post("/api/services", newService).then(function () {
            console.log(newService)

        });
    }
});
