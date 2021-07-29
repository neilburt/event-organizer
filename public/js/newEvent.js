//Creating a new event

const newEventHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('.event-title').value.trim();
  const location = document.querySelector('.event-location').value.trim(); 
  const details = document.querySelector('.event-details').value.trim();
  const date = document.querySelector('.event-date').value.trim();
  const max_capacity = document.querySelector('.event-capacity').value.trim();

  console.log(title, location, details, date, max_capacity);
  if (title && location && details && date && max_capacity) {
      const response = await fetch('/api/events', {
          method: 'POST',
          body: JSON.stringify({ title, location, details, date, max_capacity }),
          headers: {'Content-Type': 'application/json'},
      });
      const data = await response.json();
      console.log(data);
      if (data && data.result === "success") {
          document.location.replace('/dashboard');
      } else {
          alert('Failed to create event');
      }
  }
};

document.querySelector('.new-event-form').addEventListener('submit', newEventHandler);