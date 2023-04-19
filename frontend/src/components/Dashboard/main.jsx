import React from "react";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import DrawIcon from "@mui/icons-material/Draw";
import CreateIcon from "@mui/icons-material/Create";
import "../styles/dashboard.css";
import { useNavigate } from "react-router-dom";

function Main() {
  const nav = useNavigate()
  const handlePost = () =>{
    nav('/post')
  }
  return (
    <div className="main-container">
      <div className="post-something flex-col">
        <div className="flex-row user-ser">
          <div id="user"></div>
          <input id="ask-share" type="text" placeholder="What do you want to ask or Share?" />
        </div>
        <div className="flex-row querry-btn">
          <div className="flex-row querry" onClick={()=>nav('/ask')}>
            <LiveHelpIcon />
            Ask
          </div>
          <div className="flex-row querry" onClick={()=>nav('/answer')}>
            <DrawIcon />
            Answer
          </div>
          <div className="flex-row querry" onClick={handlePost}>
            <CreateIcon />
            Post
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
