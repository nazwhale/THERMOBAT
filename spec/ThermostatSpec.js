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
      expect(thermostat.min).toEqual(10)
    });

  });

});
