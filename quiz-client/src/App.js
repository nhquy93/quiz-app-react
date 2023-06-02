import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Home />
      </div>
    </BrowserRouter>
  );
}

export default App;
