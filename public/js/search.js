// const cityInput = document.getElementById("cityInput");
// let searchData;

const apiGetByZip = async (event) => {
    event.preventDefault();
    const zipInput = document.querySelector("#zipInput").value.trim();
    // const clientId = "MjI2MjI4NTh8MTYyNjk3MDg5NS41Mzc3NTc";
    // const clientSecret = "41ea6b300379c4e9d39458d185e60c52b49d4768398589851fa2ecdd1bd7b30f";
    // const endpoint = "events";
    
    
    if (zipInput) {
      console.log(zipInput);
      const response = await fetch(`http://localhost:3001/api/search/zip/${zipInput}`)
  
      const data = await response.json();

      console.log(data);
      return data;
    };
}

document.querySelector('#zipBtn').addEventListener('click', apiGetByZip);