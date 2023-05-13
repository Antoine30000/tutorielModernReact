import { Provider } from "react-redux";
import { Board } from "./components/Board";
import { store } from "./stateManagement/store";

function App() {
  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <Provider store={store}>
      <Board />
      </Provider>
    </div>
  );
}

export default App;