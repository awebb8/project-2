$(document).ready(function () {
	$("textarea")
		.each(function () {
			this.setAttribute("style", "height:" + this.scrollHeight + "px;overflow-y:hidden;");
		})
		.on("input", function () {
			this.style.height = "auto";
			this.style.height = this.scrollHeight + "px";
		});

	$(".customer-create-event").on("submit", function (event) {
		event.preventDefault();
		console.log("you clicked the save button");
		// make a newCharacter obj
		var newEvent = {
			eventName: $("#eventName").val(),

			eventDate: $("#eventDate").val(),

			startTime: $("#startTime").val(),

			endTime: $("#endTime").val(),

			eventType: $("#eventType").val(),

			guestCount: $("#guestCount").val(),

			address: $("#address").val(),

			city: $("#city").val(),

			state: $("#state").val(),
			zipCode: $("#zipCode").val(),
			description: $("#description").val(),
		};
		console.log(newEvent);

		if (!newEvent.eventName || !newEvent.guestCount || !newEvent.eventDate || !newEvent.startTime || !newEvent.endTime || !newEvent.address || !newEvent.city || !newEvent.state || !newEvent.zipCode || !newEvent.description) {
			return;
		}

		createCustomerEvent(newEvent.eventName, newEvent.eventDate, newEvent.startTime, newEvent.endTime, newEvent.eventType, newEvent.guestCount, newEvent.address, newEvent.city, newEvent.state, newEvent.zipCode, newEvent.description);
		$("#eventName").val("");
		$("#eventDate").val("");
		$("#startTime").val("");
		$("#endTime").val("");
		$("#eventType").val("");
		$("#guestCount").val("");
		$("#address").val("");
		$("#city").val("");
		$("#state").val("");
		$("#zipCode").val("");
		$("#description").val("");
	});
	// send an AJAX POST-request with jQuery
	function createCustomerEvent(eventName, eventDate, startTime, endTime, eventType, guestCount,  address, city, state, zipCode, description) {
		$.post("/api/customer-create-event", {
			eventName: eventName,
			eventDate: eventDate,
			startTime: startTime,
			endTime: endTime,
			eventType: eventType,
			guestCount: guestCount,
			address: address,
			city: city,
			state: state,
			zipCode: zipCode,
			description: description,
		})

			// on success, run this callback
			.then(function (data) {
				window.location.replace("/services");
				// log the data we found
			})
			.catch(handleLoginErr);
	}

	function handleLoginErr(err) {
		$("#alert .msg").text(err.responseJSON);
		$("#alert").fadeIn(500);
	}
});
