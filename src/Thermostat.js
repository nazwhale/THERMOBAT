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
const LOW_USAGE = 18
const MED_USAGE = 25

Thermostat.prototype.getTemp = function() {
  return this._temp
}

Thermostat.prototype.isMinTemp = function(){
  return this._temp === MIN_TEMP;
}

Thermostat.prototype.isMaxTemp = function(){
  return this._temp === this.max
}

Thermostat.prototype.increase = function() {
  if (this.isMaxTemp()){
    return;
  }
  this._temp += 1;
};

Thermostat.prototype.decrease = function() {
  if (this.isMinTemp()){
    return;
  }
  this._temp -= 1;
};

Thermostat.prototype.switchSavingMode = function() {
  this.max === SAVING_MAX ? this.max = NON_SAVING_MAX : this.max = SAVING_MAX
  this.controlExcess();
}

Thermostat.prototype.controlExcess = function() {
  if (this._temp > SAVING_MAX){
    this._temp = SAVING_MAX
  }
}

Thermostat.prototype.isSavingOn = function() {
  if(this.max === SAVING_MAX) {
     return 'saving-on'
   }
  return 'saving-off'
}

Thermostat.prototype.reset = function(){
  this._temp = 20
}

Thermostat.prototype.usage = function() {
  if (this._temp < LOW_USAGE) {
    return 'low-usage'
  }
  else if (this._temp < MED_USAGE) {
    return 'medium-usage'
  }
  return 'high-usage'
}
