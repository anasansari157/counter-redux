console.log('Connected');

let h1 = document.querySelector('h1');
let increment = document.querySelector('.increment')
let decrement = document.querySelector('.decrement')
let reset = document.querySelector('.reset')




let functionStore = Redux.createStore(function(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return 0;
    default:
      return state
  }
})  //Why?
console.log(functionStore);
// console.log(counter);
functionStore.subscribe(() => {
  h1.textContent = functionStore.getState();
  console.log(functionStore.getState);
  
})

function incrementCount() {
  functionStore.dispatch({ type: 'INCREMENT' })

}
function decrementCount() {
  functionStore.dispatch({ type: 'DECREMENT' })

}
function resetCount() {
  functionStore.dispatch({ type: 'RESET' })

}


increment.addEventListener('click', incrementCount);
reset.addEventListener('click', resetCount);
decrement.addEventListener('click', decrementCount);



// h1.textContent = count.getState()