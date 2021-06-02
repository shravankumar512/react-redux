import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./actions";
import "./styles.css";

export default function App() {

  // DISPLAY IN TO THE DOM
  const counter = useSelector(state => state.counter)

  // DISPATCH ACTIONS...
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Hello</h1>
      <p>{counter}</p>
      <button onClick={() => dispatch(increment())} >increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
}
