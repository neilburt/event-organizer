// const fetch = require("node-fetch");


const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#project-name').value.trim();
    const needed_funding = document.querySelector('#project-funding').value.trim();
    const description = document.querySelector('#project-desc').value.trim();
  
    if (name && needed_funding && description) {
      const response = await fetch(`/api/projects`, {
        method: 'POST',
        body: JSON.stringify({ name, needed_funding, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create project');
      }
    }
  };
  
function getEventsByZipCode(){
    const result = fetch("/api/events");
    console.log(result);
    // const data = result.json()
    // console.log(data);
    // update the home page with the data that comes back
}



// event listenerfor homepage button click

getEventsByZipCode();