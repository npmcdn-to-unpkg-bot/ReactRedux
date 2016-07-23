var currentState = 0;
function counter(state, action){
  if(state === undefined || action.type === undefined){
    return currentState;
  }
  switch(action.type){
    case 'INCREMENT':
      state += 1;
      break;
    case 'DECREMENT':
      state -= 1;
      break;
    default:
      state = currentState;
      break;
  }
  currentState = state;
  return state;
}

var store = Redux.createStore(counter),
    elm = document.getElementById("counter"),
    render = function(){
      elm.textContent  = store.getState();
    };

store.subscribe(render);
render();

document.getElementById("incCounter").addEventListener("click", function(){
  store.dispatch({type:'INCREMENT'});
});

document.getElementById("decCounter").addEventListener("click", function(){
  store.dispatch({type:'DECREMENT'});
});



// Initial State
expect(
  counter(undefined, {})
).toEqual(0);

// Increment
expect(
  counter(currentState, {type : 'INCREMENT'})
).toEqual(1);

// Decrement
expect(
  counter(currentState, {type : 'DECREMENT'})
).toEqual(0);

// FailSafe
expect(
  counter(currentState, {type: 'Vierd action'})
).toEqual(currentState);


console.log("Test Passed");