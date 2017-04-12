$(document).ready(function() {
  var thermostat = new Thermostat;
  updates();

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
  })

  function updateTemperature(){
    $('#temperature').text(thermostat.getTemp());
    $('#switch-saving-mode').attr('class', thermostat.isSavingOn())
  };

  function updateUsage() {
    $('#energy-usage').text(thermostat.usage());
  };



  function updates() {
    updateTemperature();
    updateUsage();
  }
});
