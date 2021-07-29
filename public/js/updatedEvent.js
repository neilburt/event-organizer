//Update created event

// const { response } = require("express");

const updateCreatedEvent = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        console.log(id);
        
        let data;
        const title = document.querySelector('.event-title').value.trim();
        const location = document.querySelector('.event-location').value.trim();
        const details = document.querySelector('.event-details').value.trim();
        const date = document.querySelector('.event-date').value.trim();
        const max_capacity = document.querySelector('.event-capacity').value.trim();

        try {
            const response = await fetch(`/api/events/${id}`, {
                method: 'PUT',
                body: JSON.stringify({ title, location, details, date, max_capacity }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            data = await response.json()
            console.log(data)
        } catch (err) {
            console.log(err);
        }

        if (response.ok) {
            document.location.replace(`/updatedEvent/${id}`);
            // window.location.href= "/dashboard";
        } else {
            alert('Failed to update event');
        }
    }
};

//Loop through the buttons
var updateBtn = document.querySelectorAll(".updateBtn")

for (var i = 0; i < updateBtn.length; i++) {

    updateBtn[i].addEventListener("click", updateCreatedEvent);

}