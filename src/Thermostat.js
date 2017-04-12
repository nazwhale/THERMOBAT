function Thermostat(temp=20) {
  this.temp = temp
}

Thermostat.prototype.increase = function(){
  this.temp += 1
};

Thermostat.prototype.decrease = function() {
 this.temp -= 1  
};
