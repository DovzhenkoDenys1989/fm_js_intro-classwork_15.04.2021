'use strict';

class Stack {
  constructor(maxSize = 10, ...args) {
    this._maxSize = maxSize;
    this._size = 0;
    this.push(...args);
  }

  get isEmpty() {
    return this._size === 0;
  }

  get size() {
    return this._size;
  }

  /*push(value) {
    if (this.size >= this._maxSize) {
      throw new RangeError("Stack overflow");
    }
    this[`_${this.size}`] = value;
    return ++this._size;
  }*/
  push(...args) {
    for(const item of args){
      if (this.size >= this._maxSize) {
        throw new RangeError("Stack overflow");
      }
      this[`_${this.size}`] = item;
      this._size++;
    }
    return this.size;
  }

  pop() {
    if (this.isEmpty) {  // || this.size <= 0
      return;
    }
    const lastItem = this[`_${this.size - 1}`];
    delete this[`_${this.size - 1}`];
    this._size--;
    return lastItem;
  }

  pip() {
    return this[`_${this.size - 1}`];
  }
}

const stack = new Stack();


// Сделать возможным:

const stack1 = new Stack(15, "val1", "val2", 3, 4, 5);
stack1.push(6, 7, 8, 9, 10);



const optinons = {
  braces: {
    '(' : ')',
    '[' : ']',
    '{' : '}',
  },
  isStrict: false,
}

function checkSequence(str, optinons) {
  const stack = new Stack();
  const braces = optinons.braces;
  const closeBraces = Object.values(braces);


  for (const symbol of str) {
    debugger;
    /* 1. Определить открывающуюся скобку. Запушить в стек */
    if(braces[symbol]){
      stack.push(symbol);
      continue;
    }

    /* 2. Определить пуст ли стек. Вернуть false */
    // if(braces[stack.pip()] === symbol){
    //   braces[stack.p]
    // }

    if(closeBraces.includes(symbol) && stack.isEmpty){
      return false;
    }

    const lastItemFromStack = stack.pip();
    const correctCloseBrace = braces[lastItemFromStack];

    if(symbol === correctCloseBrace){
      stack.pop();
    } else if (braces[symbol] || closeBraces.includes(symbol)){
      return false;
    }

  }
  return stack.isEmpty;
}


console.log(checkSequence('(ts))',optinons))


/*function checkSequence(str) {
  const stack = new Stack();
  for (const symbol of str) {
    if (symbol === "(") {
      stack.push(symbol);
    }
    if (stack.isEmpty) {
      return false;
    }
    if (symbol === ")" && stack.pip() === "(") {
      stack.pop();
    }
  }
  return stack.isEmpty;
}*/