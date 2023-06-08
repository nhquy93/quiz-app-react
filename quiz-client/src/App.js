import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useDispatch } from "react-redux";
import { TopicAPI } from "./api/topic-api";
import { setTopicList } from "./store/topics/topics-slice";
import { useEffect } from "react";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import Quiz from "./pages/Quiz/Quiz";
import { SignIn } from "./pages/SignIn/SignIn";
import PageBrowser from "./pages/PageBrowser/PageBrowser";

function App() {
  const dispatch = useDispatch();

  const fetchAll = async () => {
    const topicList = await TopicAPI.fetchAllIncludeQuestionGroup();
    dispatch(setTopicList(topicList));
  };

  useEffect(() => {
    fetchAll().catch(console.error);
  }, []);

  return (
    <div className="App">
      {/* <SideMenu /> */}
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<PageBrowser />}>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:questionGroupId" element={<Detail />} />
          <Route path="/start/:questionGroupId" element={<Quiz />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
