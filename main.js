const inputValue = document.querySelector("#countryName");
const searchButton = document.querySelector("#getCountry");
const countryName = document.querySelector(".country_name");
const countryCapital = document.querySelector(".country_capital");
const countryLanguage = document.querySelector(".country_language");
const countryCurrency = document.querySelector(".country_currency");


const fetchUsers = async (name) => {
  const api_call = await fetch(`https://restcountries.eu/rest/v2/name/${name}`)

  const data = await api_call.json();
  return { data }
}

const showData = () => {
  fetchUsers(inputValue.value).then((res) => {
    
    countryName.innerHTML = `<span class="value">${res.data[0].name}</span>`;

    countryCapital.innerHTML = `<span class="value">${res.data[0].capital}</span>`;

    countryLanguage.innerHTML =  `<span class="value">${res.data[0].languages[0].name}</span>`;
 
    countryCurrency.innerHTML =  `<span class="value">${res.data[0].currencies[0].name}</span>`;
  })
}

  searchButton.addEventListener("click", (e) => {
  showData();
  e.preventDefault();
})
