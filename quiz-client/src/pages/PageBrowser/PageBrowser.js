import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import NavDivider from "../../components/Nav-Divider/NavDivider";
import "./PageBrowser.css";
import { withAuthRequired } from "../../hoc/withAuthRequired";
import { useDispatch } from "react-redux";
import { setTopicList } from "../../store/topics/topics-slice";
import { TopicAPI } from "../../api/topic-api";

function PageBrowser() {
  const dispatch = useDispatch();

  const fetchAll = async () => {
    const topicList = await TopicAPI.fetchAllIncludeQuestionGroup();
    dispatch(setTopicList(topicList));
  };

  useEffect(() => {
    fetchAll().catch((err) => {
      if (err.statusCode === 404) {
        window.location.href = "/404";
        return;
      }
    });
  }, []);

  return (
    <div className="Page">
      <Header />
      <div className="content">
        <NavDivider />
        <Outlet />
      </div>
      <div className="footer"></div>
    </div>
  );
}

export const ProtectedPageBrowser = withAuthRequired(PageBrowser);
