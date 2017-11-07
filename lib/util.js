const Util = {
  inherits (child, parent) {
    //two ways to implement this
    //(1) Using Surrogate

    // let Surrogate = function(){};
    // Surrogate.prototype = parent.prototype;
    // child.prototype = new Surrogate();
    // child.prototype.constructor = child;

    //(2) Using Object.create

    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = parent;
  }
}

module.exports = Util;
