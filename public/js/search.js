//Getting Zipcode from input and passing it back end from third party API
const apiGetByZip = async (event) => {
  event.preventDefault();
  const zipInput = document.querySelector("#zipInput").value.trim();

  document.location.replace(`/api/search/zip/${zipInput}`);

}      


document.querySelector('#zipBtn').addEventListener('click', apiGetByZip);



