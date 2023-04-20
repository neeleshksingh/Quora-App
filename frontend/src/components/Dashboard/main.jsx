import React, { useEffect, useState } from "react";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import DrawIcon from "@mui/icons-material/Draw";
import CreateIcon from "@mui/icons-material/Create";
import "../styles/dashboard.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Main() {
  const nav = useNavigate();
  const [arr, setArr] = useState([]);
  const handlePost = () => {
    nav("/post");
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/post/allpost")
      .then(function (response) {
        console.log(response);
        console.log(typeof response.data);
        setArr(response.data);
        console.log(arr);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return (
    <div className="main-container">
      <div className="post-something flex-col">
        <div className="flex-row user-ser">
          <div id="user"></div>
          <input
            id="ask-share"
            type="text"
            placeholder="What do you want to ask or Share?"
          />
        </div>
        <div className="flex-row querry-btn">
          <div className="flex-row querry" onClick={() => nav("/ask")}>
            <LiveHelpIcon />
            Ask
          </div>
          <div className="flex-row querry" onClick={() => nav("/answer")}>
            <DrawIcon />
            Answer
          </div>
          <div className="flex-row querry" onClick={handlePost}>
            <CreateIcon />
            Post
          </div>
        </div>
      </div>
      <div className="post-something flex-col">
        {Array.isArray(arr) &&
          arr.map((data, index) => {
            return (
              <div key={index}>
                <section className="feeds">
                  <img src={data.img} alt="" />
                  <p>{data.content}</p>
                </section>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Main;
