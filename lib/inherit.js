Function.prototype.inherits = function inherits1(BaseClass) {
  function Surrogate = function(){};
  this.prototype = BaseClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
}

module.exports = Inherit;
