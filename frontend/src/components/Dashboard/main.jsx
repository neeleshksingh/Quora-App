import React, { useEffect, useState } from "react";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import DrawIcon from "@mui/icons-material/Draw";
import CreateIcon from "@mui/icons-material/Create";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ShareIcon from "@mui/icons-material/Share";
import "../styles/dashboard.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Main() {
  const nav = useNavigate();
  const [selected, setSelected] = useState(null);
  const [arr, setArr] = useState([]);
  const [count, setCount] = useState(
    parseInt(localStorage.getItem("count")) || 0
  );
  const [color, setColor] = useState("black");

  useEffect(() => {
    axios
      .get("http://localhost:3000/post/allpost")
      .then(function (response) {
        console.log("Fetched data: ", response.data);
        setArr(response.data.data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  const handlePost = () => {
    nav("/post");
  };

  const toggleContent = (index) => {
    setSelected(index === selected ? null : index);
  };

  const Increment = (index) => {
    setArr((prevArr) => {
      const newArr = [...prevArr];
      const newCount = (newArr[index].count || 0) + 1;
      console.log(`data.count: ${newCount}`);
      newArr[index].count = newCount;
      return newArr;
    });
    setCount((prevCount) => prevCount + 1);
    setColor("blue");
  };

  const Decrement = (index) => {
    setArr((prevArr) => {
      const newArr = [...prevArr];
      const newCount = (newArr[index].count || 0) - 1;
      console.log(`data.count: ${newCount}`);
      newArr[index].count = newCount;
      return newArr;
    });
    setCount((prevCount) => prevCount - 1);
    setColor("red");
  };
  return (
    <div className="main-container flex-col">
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
        {arr.length > 0 &&
          arr.map((data, index) => {
            return (
              <div className="box" key={index}>
                <section className="feeds flex-col">
                  <p className={selected === index ? "" : "truncate"}>
                    {data.content}
                  </p>
                  {data.content.length > 100 && (
                    <span className="readmore flex-row">
                      <button
                        onClick={() => toggleContent(index)}
                        className="read-more"
                      >
                        {selected === index ? "Read Less" : "Read More"}
                      </button>
                    </span>
                  )}
                  <img className="post-img" src={data.img} alt="" />
                  <div className="post-footer flex-row">
                    <div className="arrow flex-row">
                      <ArrowUpwardIcon
                        className="arrow-btn"
                        onClick={() => Increment(index)}
                      />
                      <div className="like-count" style={{ color: color }}>
                        {data.count}
                      </div>
                      <ArrowDownwardIcon
                        className="arrow-btn"
                        onClick={() => Decrement(index)}
                      />
                    </div>
                    <div className="chat-share flex-row">
                      <ChatBubbleIcon className="arrow-btn" />
                      <ShareIcon className="arrow-btn" />
                    </div>
                  </div>
                </section>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Main;