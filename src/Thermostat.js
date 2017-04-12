function Thermostat(temp=INITIAL_TEMP) {
  this.temp = temp
  this.min = MIN_TEMP
}

const INITIAL_TEMP = 20
const MIN_TEMP = 10

Thermostat.prototype.increase = function(){
  this.temp += 1
};

Thermostat.prototype.decrease = function() {
 this.temp -= 1  
};

