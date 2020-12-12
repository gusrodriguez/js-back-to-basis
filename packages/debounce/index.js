// debounce: ejecuta despues de cierto tiempo de haber parado con la accion
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

// const body = document.getElementsByTagName('body')[0];
// body.addEventListener('mousemove', (e) => {
//   console.log(e.clientX);
//   console.log(e.clientY);
// })

// throttle: ejecuta cierta cantidad en intervalos de tiempo, no ejecuta todos los eventos
// thottle by time
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

// throttle by qty of events
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


