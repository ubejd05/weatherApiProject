//Init storage
const storage = new Storage();
//Get stored location data
const weatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherLocation);

// Init UI object
const ui = new UI('gjilan');

//  Get weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  // Change Location
  weather.changeLocation(city);
  // Set location in LS
  storage.setLocationData(city)
  getWeather();

  //Close modal
  $('#locModal').modal('hide');
});


function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err))
}