
const createEventBtn = $("#create-event-button");
const upcomingEventsContainer = $("#upcoming-events");
const createEventsContainer = $("#create-events");



createEventBtn.on("click", function (event) {
    console.log("you clicked me")
    event.preventDefault();
    upcomingEventsContainer.addClass("hide");
    createEventsContainer.removeClass("hide");
})