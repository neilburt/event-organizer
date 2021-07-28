//Update created event

const updateCreatedEvent = async(event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        let data;

        try {
            const response = await fetch(`/api/events/saved`, {
                method: 'PUT',
                body: JSON.stringify({ id: id }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            data = await response.json()
            console.log(data)
        } catch(err){
            console.log(err)
        }

        if (data) {
            document.location.replace('/dashboard');
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