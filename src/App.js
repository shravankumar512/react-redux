import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./actions";
import "./styles.css";

export default function App() {

  const counter = useSelector(state => state.counter)
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
