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
      renderCounter(store);
    };

store.subscribe(render);
render();