

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