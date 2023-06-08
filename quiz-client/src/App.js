import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import Quiz from "./pages/Quiz/Quiz";
import Auth from "./pages/Auth/Auth";
import PageBrowser from "./pages/PageBrowser/PageBrowser";

function App() {
  return (
    <div className="App">
      {/* <SideMenu /> */}
      <Routes>
        {/* <Route path="/signin" element={<Auth />} /> */}
        <Route path="/" element={<PageBrowser />}>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/start" element={<Quiz />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
