

function getEventsByZipCode(){
    const result = fetch("/api/events", {
        method: 'GET'
    });
    
    console.log(result);
    // const data = result.json()
    // console.log(data);
    // update the home page with the data that comes back
}



// event listenerfor homepage button click

getEventsByZipCode();