import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import SideMenu from "./components/Side-Menu/SideMenu";
import Detail from "./pages/Detail/Detail";
import NavDivider from "./components/Nav-Divider/NavDivider";
import Quiz from "./pages/Quiz/Quiz";

function App() {
  return (
    <div className="App">
      {/* <SideMenu /> */}
      <Header />
      <div className="content">
        <NavDivider />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/start" element={<Quiz />} />
        </Routes>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
