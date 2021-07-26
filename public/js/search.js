const cityInput = document.getElementById("cityInput");
let searchData;

const apiGetByZip = async (event) => {
    event.preventDefault();
    const zipInput = document.querySelector("#zipInput").value.trim();
    const clientId = "MjI2MjI4NTh8MTYyNjk3MDg5NS41Mzc3NTc";
    const clientSecret = "41ea6b300379c4e9d39458d185e60c52b49d4768398589851fa2ecdd1bd7b30f";
    const endpoint = "events";
    const id = "2";
    
    if (zipInput) {
      console.log(zipInput);
      const response = await fetch(`https://api.seatgeek.com/${id}/${endpoint}?postal_code=${zipInput}&client_id=${clientId}&client_secret=${clientSecret}`)
  
      const data = await response.json();

      console.log(data);
      return data;
    };
}

document.querySelector('#zipBtn').addEventListener('click', apiGetByZip);