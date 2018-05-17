var countries;

const makeRequest = function(url, callback){
  const request = new XMLHttpRequest();
  request.open("GET", url);

  request.addEventListener("load", callback);

  request.send();
};

const requestComplete = function(){

  if(this.status !== 200) return;

  const jsonString = this.responseText;

  countries = JSON.parse(jsonString);

  populateList(countries);

};

// loop through Countries array
// create a new li
// set the inner text to the countries name
// append the li to the ul
const populateList = function(countries){
  const select = document.getElementById("country-list");

  countries.forEach(country => {
    const option = document.createElement("option");
    option.innerText = country.name;
    select.appendChild(option);

  });

const selectDropDown = function(countries){

  const select = document.querySelector('selected');
  select.addEventListener('change', handleSelectedChange);

  const button = document.querySelector('button');
  button.addEventListener('click', handleButtonClick);
}


  // for(let country of countries){
  //   const li = document.createElement(li);
  //   li.innerText = country.name
  //  ul.appendChild(li);

  // }

  // Instead of making the AJAX call when the window loads, add a button that when clicked
  // makes the AJAX call and populates the list.


};

const handleSelectChange = function (event) {

  console.log(event.target.selectedIndex);
  console.log(countries);

  let selectedCountry = countries[event.target.selectedIndex];
  const pTag = document.querySelector('#select-result');
  pTag.innerText = `${selectedCountry.name}, ${selectedCountry.capital}, ${selectedCountry.population}`

  save(selectedCountry, pTag.value);
  pTag.value = '';

  // var state = JSON.parse(localStorage.getItem('todoList')) || {};
  //
  // var selectedListName = this.value;
  // var selectedList = state[selectedListName] || [];
  //
  // var ul = document.querySelector('#todo-list');
  // populate(ul, selectedList);
}

const app = function(){
  const button = document.getElementById("populateListOfCountries");
  button.addEventListener("click", function(){
  const url = "https://restcountries.eu/rest/v2/all";
  makeRequest(url, requestComplete);
  let jsonString = localStorage.getItem(currentCountry);
  let savedCountry = JSON.parse(jsonString)
  countryDetails(savedCountry)
  const selected = document.getElementById('country-list');
  selected.addEventListener('change', handleSelectChange)

});

}

const save = function(country){
  // const storageCountry = JSON.stringify(country);
  const jsonString = JSON.stringify(country);
  localStorage.setItem('currentCountry', jsonString);

}

window.addEventListener('load', app);
