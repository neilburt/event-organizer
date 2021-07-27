

const newEventHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#event-name').value.trim();
    const location = document.querySelector('#event-location').value.trim(); 
    const details = document.querySelector('#event-details').value.trim();

    if (title && location && details) {
        const response = await fetch(`/api/events`, {
            method: 'POST',
            body: JSON.stringify({ title, location, details }),
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

const savedEvent = async(event) => {
    event.preventDefault();
    console.log('save button');

    const title = document.querySelector('#event-title').innerText;
    // const location = document.querySelector('#event-location').innerText;
    const type = document.querySelector('#event-type').innerText;
    const date = document.querySelector('#event-date').innerText;

    console.log(title, type, date);

    if (title /*&& location*/&& type && date) {
        
            const response = await fetch(`/api/events/saved`, {
                method: 'POST',
                body: JSON.stringify({ title,/*location,*/ type, date }),
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


const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/events/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete project');
        }
    }
};


// document.querySelector('#new-event-form').addEventListener('submit', newEventHandler);


document.querySelector('#saveBtn').addEventListener('click', savedEvent);

    // document
    // .querySelector('#deletebtn')
    // .addEventListener('click', delButtonHandler);
