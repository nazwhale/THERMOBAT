'use strict';

function Thermostat(temp=INITIAL_TEMP) {
  this._temp = temp
  this.min = MIN_TEMP
  this.max = SAVING_MAX
}

const INITIAL_TEMP = 20
const MIN_TEMP = 10
const SAVING_MAX = 25
const NON_SAVING_MAX = 32

Thermostat.prototype.getTemp = function() {
  return this._temp
}

Thermostat.prototype.increase = function() {
  this._temp += 1
};

Thermostat.prototype.decrease = function() {
  if (this._temp > MIN_TEMP){
    this._temp -= 1
  }
};

Thermostat.prototype.switchSavingMode = function() {
  this.max === SAVING_MAX ? this.max = NON_SAVING_MAX : this.max = SAVING_MAX
}

Thermostat.prototype.reset = function(){
  this._temp = 20
}

Thermostat.prototype.usage = function() {
  if (this._temp < 18) {
    return 'low-usage'
  }
  else if (this._temp < 25) {
    return 'medium-usage'
  }
  return 'high-usage'
}
