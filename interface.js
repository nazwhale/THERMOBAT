$(document).ready(function() {
  var thermostat = new Thermostat;
  updates();
  displayWeather('bratislava');
  displayTime();

  $('#current-city').change(function() {
    var city = $('#current-city').val();
    displayWeather(city)
  })

  $('#increase-temperature').on('click',function(){
    thermostat.increase();
    updates();
  })

  $('#decrease-temperature').on('click',function(){
    thermostat.decrease();
    updates();
  })

  $('#reset').on('click', function() {
    thermostat.reset();
    updates();
  })

  $('#switch-saving-mode').on('click', function() {
    thermostat.switchSavingMode()
    updates();
  })

  function updateTemperature(){
    $('#temperature').text(thermostat.getTemp());
    $('#switch-saving-mode').attr('class', thermostat.isSavingOn());
  }

  function updateUsage() {
    $('#energy-usage').text(thermostat.usage());
  };

  function updates() {
    updateTemperature();
    updateUsage();
  }

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=';
    var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
    var units = '&units=metric';
    $.get(url + city + token + units, function(data) {
      $('#current-temperature').text(data.main.temp)
    })
  }i

  // function displayTime() {
  //   $.get('http://localhost:4567/api.json', function(data) {
  //     $('#current-time').text(data)
  //   })
  // }
});
