
const apiGetByZip = async (event) => {
    event.preventDefault();
    const zipInput = document.querySelector("#zipInput").value.trim();
    
    if (zipInput) {
      console.log(zipInput);
      const response = await fetch(`http://localhost:3001/api/search/zip/${zipInput}`)
  
      const data = await response.json();

      console.log(data);
      return data;
    };
}

const apiGetByType = async (event) => {
  event.preventDefault();
  const typeInput = document.querySelector("#typeInput").value.trim();
  
  if (typeInput) {
    console.log(typeInput);
    const response = await fetch(`http://localhost:3001/api/search/type/${typeInput}`)

    const data = await response.json();

    console.log(data);
    return data;
  };
}

const apiGetByCity = async (event) => {
  event.preventDefault();
  const cityInput = document.querySelector("#cityInput").value.trim();
  
  if (cityInput) {
    console.log(cityInput);
    const response = await fetch(`http://localhost:3001/api/search/city/${cityInput}`)

    const data = await response.json();

    console.log(data);
    return data;
  };
}


const apiGetByState = async (event) => {
  event.preventDefault();
  const stateInput = document.querySelector("#stateInput").value.trim();
  
  if (stateInput) {
    console.log(stateInput);
    const response = await fetch(`http://localhost:3001/api/search/state/${stateInput}`)

    const data = await response.json();

    console.log(data);
    return data;
  };
}



document.querySelector('#zipBtn').addEventListener('click', apiGetByZip);

document.querySelector('#cityBtn').addEventListener('click', apiGetByCity);

document.querySelector('#stateBtn').addEventListener('click', apiGetByState);

document.querySelector('#typeBtn').addEventListener('click', apiGetByType);