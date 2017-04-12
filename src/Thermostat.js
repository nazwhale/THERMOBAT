function Thermostat(temp=20) {
  this.temp = temp
}

Thermostat.prototype.increase = function(){
  this.temp += 1
};
