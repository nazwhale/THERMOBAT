$(document).ready(function() {
  var thermostat = new Thermostat;
  updateTemperature();

  $('#increase-temperature').on('click',function(){
    thermostat.increase();
    updateTemperature();
  })

  $('#decrease-temperature').on('click',function(){
    thermostat.decrease();
    updateTemperature();
  })

  function updateTemperature(){
    $('#temperature').text(thermostat.getTemp());
  };
});
