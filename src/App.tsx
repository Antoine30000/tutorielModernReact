import { Provider } from "react-redux";
import { Board } from "./components/Board";
import { store } from "./stateManagement/store";

function App() {
  return (
    <>
    <div className="content">
      <h1>Tic Tac Toe</h1>
      <div className="game">
        <Provider store={store}>
          <Board />
        </Provider>
      </div>
    </div>
    </>
  );
}

export default App;