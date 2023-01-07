import './App.css';
import QuoteGenerator from "./QuoteGenerator";
import {ApiContextProvider} from "./api-context";

function App() {
  return (
    <ApiContextProvider>
      <div className="App">
        <QuoteGenerator/>
      </div>
    </ApiContextProvider>
  );
}

export default App;
