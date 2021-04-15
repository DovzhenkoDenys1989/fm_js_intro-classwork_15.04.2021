'use strict';

const sum = (...args) => {
  return args.reduce((accumulator, currentValue) => {
    if(!Number.isFinite(currentValue)) {
      throw new TypeError('Wrong argument type');
    }
    return accumulator + currentValue;
  }, 0);
};

//console.log(sum('text',5,15));