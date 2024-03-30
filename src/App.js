import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Box from "./components/Box";

function App() {
  const count = useSelector((state) => state.count);
  let id = useSelector((state) => state.id);
  let password = useSelector((state) => state.password);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "INCREMENT", payload: { num: 5 } });
  };

  const decrement = () => {
    dispatch({ type: "DECREMENT", payload: { num: 5 } });
  };

  const login = () => {
    dispatch({ type: "LOGIN", payload: { id: "abc", password: 123 } });
  };

  return (
    <div>
      <button onClick={login}>로그인</button>
      <h1>
        {id} {password}
      </h1>
      <div>{count}</div>
      <button onClick={increment}>+5</button>
      <button onClick={decrement}>-5</button>
      <Box />
    </div>
  );
}

export default App;
