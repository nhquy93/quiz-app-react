import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import Quiz from "./pages/Quiz/Quiz";
import { SignIn } from "./pages/SignIn/SignIn";
import { ProtectedPageBrowser } from "./pages/PageBrowser/PageBrowser";
import PageNotFound from "./pages/404/PageNotFound";

function App() {
  return (
    <div className="App">
      {/* <SideMenu /> */}
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<ProtectedPageBrowser />}>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:questionGroupId" element={<Detail />} />
          <Route path="/start/:questionGroupId" element={<Quiz />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
