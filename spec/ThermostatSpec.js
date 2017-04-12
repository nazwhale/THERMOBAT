'use strict';

describe('Thermostat', function() {

  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('initialize', function() {

    it('starts at twenty degrees', function() {
      expect(thermostat.temp).toEqual(20);
    });
  });

  describe('changing temp', function() {

    it('increases temp with an increase function', function() {
      thermostat.increase();
      expect(thermostat.temp).toEqual(21);
    });

    it('decreases temp with a decrease function', function(){
      thermostat.decrease();
      expect(thermostat.temp).toEqual(19);
    });

    it('has a minimum temperature of 10', function() {
      expect(thermostat.min).toEqual(10);
    });
  });

  describe('power saving mode', function(){
    it('is on by default', function(){
      expect(thermostat.max).toEqual(25);
    });
    it('is switched off by switch method', function() {
      thermostat.switchSavingMode()
      expect(thermostat.max).toEqual(32);
    });
  });

  describe('reset function', function(){
    it('resets the temp to 20', function() {
      thermostat.increase()
      thermostat.reset()
      expect(thermostat.temp).toEqual(20)
    });
  });

  describe('energy usage', function(){
    it('expects low-usage when temp less than 18', function(){
      for(var x=0; x<3; x++) {
        thermostat.decrease()
      }
      expect(thermostat.usage()).toEqual('low-usage')
    })
  })


});
