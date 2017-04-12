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

});
