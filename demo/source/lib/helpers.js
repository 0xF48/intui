ONE_SECOND = 1000
ONE_MINUTE = ONE_SECOND*60
ONE_HOUR = ONE_MINUTE*60
ONE_DAY = ONE_HOUR*24
window.log = console.log

Number.prototype.clamp = function(min, max) {
  return Math.min(Math.max(this, min), max);
};