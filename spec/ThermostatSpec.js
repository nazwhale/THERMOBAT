'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('initialize', function() {
    it('starts at twenty degrees', function() {
      expect(thermostat.getTemp()).toEqual(INITIAL_TEMP);
    });
  });

  describe('changing temp', function() {

    it('increases temp with an increase function', function() {
      thermostat.increase();
      expect(thermostat.getTemp()).toEqual(INITIAL_TEMP + 1);
    });

    it('decreases temp with a decrease function', function(){
      thermostat.decrease();
      expect(thermostat.getTemp()).toEqual(INITIAL_TEMP - 1);
    });

    it('has a minimum temperature of 10', function() {
      for (var i=0; i<11; i++) {
        thermostat.decrease();
      }
      expect(thermostat.getTemp()).toEqual(MIN_TEMP);
    });

    it('has a max temp of 32 when PSM is off', function(){
      thermostat.switchSavingMode()
      for (var i=0; i<13; i++) {
        thermostat.increase();
      }
      expect(thermostat.getTemp()).toEqual(NON_SAVING_MAX);
    })
  });

  describe('power saving mode', function(){
    it('is switched off by switch method', function() {
      thermostat.switchSavingMode()
      expect(thermostat.max).toEqual(NON_SAVING_MAX);
    });

    it('has max of 25 when PSM on', function(){
      for (var i=0; i<6; i++){
        thermostat.increase();
      }
      expect(thermostat.getTemp()).toEqual(SAVING_MAX)
    });
  });

  describe('reset function', function(){
    it('resets the temp to 20', function() {
      thermostat.increase()
      thermostat.reset()
      expect(thermostat.getTemp()).toEqual(INITIAL_TEMP)
    });
  });

  describe('energy usage', function(){

    it('expects low-usage when temp less than 18', function(){
      for(var x=0; x<3; x++) {
        thermostat.decrease()
      }
      expect(thermostat.usage()).toEqual('low-usage')
    })

    it('expects medium-usage when temp less than 25', function(){
      expect(thermostat.usage()).toEqual('medium-usage')
    })

    it('expects high-usage when temp more than 25', function(){
      for(var x=0; x<6; x++) {
        thermostat.increase()
      }
      expect(thermostat.usage()).toEqual('high-usage')
    })
  })
});
