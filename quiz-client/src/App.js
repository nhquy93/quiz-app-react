import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import NavDivider from "./components/Nav-Divider/NavDivider";
import Quiz from "./pages/Quiz/Quiz";
import { useDispatch } from "react-redux";
import { TopicAPI } from "./api/topic-api";
import { setTopicList } from "./store/topics/topics-slice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  const fetchAll = async() => {
    const topicList = await TopicAPI.fetchAllIncludeQuestionGroup();
    dispatch(setTopicList(topicList));
  };

  useEffect(() => {
    fetchAll().catch(console.error);
  }, []);

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
