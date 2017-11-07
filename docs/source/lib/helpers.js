ONE_SECOND = 1000
ONE_MINUTE = ONE_SECOND*60
ONE_HOUR = ONE_MINUTE*60
ONE_DAY = ONE_HOUR*24
window.log = console.log.bind(console)

Number.prototype.clamp = function(min, max) {
  return Math.min(Math.max(this, min), max);
};

Number.prototype.countDecimals = function () {
    if(Math.floor(this.valueOf()) === this.valueOf()) return 0;
    return this.toString().split(".")[1].length || 0; 
}