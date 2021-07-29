//Save Api Events
const savedEvent = async (event) => {
    event.preventDefault();
    console.log('save button');

    const title = event.target.parentNode.children[0].innerHTML;
    const type = event.target.parentNode.children[1].innerHTML;
    const datetime_local = event.target.parentNode.children[2].innerHTML;
    // const url = event.target.parentNode.children[3].innerHTML;

    console.log(title, type, datetime_local);

    if (title && type && datetime_local) {

        const response = await fetch(`/api/events/saved`, {
            method: 'POST',
            body: JSON.stringify({ title, type, datetime_local}),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            document.location.replace('/dashboard');

        } else {
            alert('Failed to create event');
        }
    }
};

//Loop through the buttons to save the correct event
var saveBtn = document.querySelectorAll(".saveBtn")
for (var i = 0; i < saveBtn.length; i++) {
    saveBtn[i].addEventListener("click", savedEvent)
}
