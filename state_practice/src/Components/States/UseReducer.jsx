import React, {  } from "react";
import { useReducer } from "react";

export default function UseReducer() {
  //   const [count, setCount] = useState(0);

  const initialState = { count: 0 };

  const reducer = (state, action) => { //accepts the two parameters
    switch (action.type) { //it returns a new state object.
      case "increase":
        return { count: state.count + 1 };
      case "decrease":
        return { count: state.count - 1 };
      case "input":
        return { count: action.payload };
      default:
        throw new Error(`Unknown action type: ${action.type}`);
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>UseReducer Hook</h1>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: "increase" })}>Increment</button>
      <br />
      <br />
      <button onClick={() => dispatch({ type: "decrease" })}>Decrement</button>
      <br />
      <br />
      <input
        value={state.count}
        onChange={(e) =>
          dispatch({ type: "input", payload: Number(e.target.value) })
        }
        type="number"
      />
    </div>
  );
}
