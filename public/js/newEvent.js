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
          }
      });

      if (response.ok) {
          document.location.replace('/dashboard');
      } else {
          alert('Failed to create event');
      }
  }
};

document.querySelector('#new-event-form').addEventListener('submit', newEventHandler);