import { useReducer } from "react";

type CounterState = {
    count: number;
}

type UpdateAction = {
    type: "INCREMENT" | "DECREMENT";
    value: number;
}

type ResetAction = {
    type: "RESET";
}

type CounterAction = UpdateAction | ResetAction;

const reducer = (state: CounterState, action: CounterAction) => {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + action.value };
      case 'DECREMENT':
        return { count: state.count - action.value };
      case 'RESET':
        return { count: 0 };
      default:
        return state;
    }
  };

// Component using useReducer
export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
  
    const increment = () => {
      dispatch({ type: 'INCREMENT', value: 1 });
    };
  
    const decrement = () => {
      dispatch({ type: 'DECREMENT', value: 1 });
    };
  
    const incrementFive = () => {
      dispatch({ type: 'INCREMENT', value: 5 });
    };
  
    const decrementFive = () => {
      dispatch({ type: 'DECREMENT', value: 5 });
    };
  
    const reset = () => {
      dispatch({ type: 'RESET' });
    };
  
    return (
      <div>
        <h2>Count: {state.count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={incrementFive}>Increment 5</button>
        <button onClick={decrementFive}>Decrement 5</button>
        <button onClick={reset}>Reset</button>
      </div>
    );
  };