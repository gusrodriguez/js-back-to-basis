// debounce: Executes after certain time an action is stopped.
function debounce(callback, delay) {
  let timer;
  return function(...args) {
    const context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(context, ...args);
    }, delay);
  }
}

const debounceInput = document.getElementById('debounce-input');
debounceInput.addEventListener('keyup', debounce(() => console.log('debounce'), 500));

// throttle: Flattens the execution. It will excecute events every certain interval of time. It won't execute all the events. 
function throttle(callback, delay) {
  let lastCall = 0;
  return function(...args) {
    const now = (new Date()).getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    callback(...args);
  }
}

debounceInput.addEventListener('keyup', throttle(() => console.log('throttle'), 1000));

// throttle by quantity of events
function throttleByEvents(callback, delay) {
  let quantity = 0;
  return function(...args) {
    quantity++;
    if (quantity < delay) {
      return;
    }
    quantity = 0;
    callback(...args);
  }
}

debounceInput.addEventListener('keyup', throttleByEvents(() => console.log('throttle events'), 20));

function Person(name) {
  this.name = name;
}

Person.prototype.getName = function() { return this.name }

const someguy = new Person('someguy');


