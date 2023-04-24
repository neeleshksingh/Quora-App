import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ListAltIcon from "@mui/icons-material/ListAlt";
import CreateIcon from "@mui/icons-material/Create";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutButton from "../Authorization/logout";
import "../styles/nav.css";
import { useNavigate } from "react-router-dom";

function DashNav() {
  const nav = useNavigate()
  return (
    <div>
      <nav className="flex-row" id="nav2">
        <h1 className="logo-head-nav cursor-pointer" onClick={()=>nav('/main')} style={{ fontSize: "33px" }}>
          Quora
        </h1>
        <div className="flex-row nav-icons">
          <HomeIcon className="cursor-pointer" onClick={()=>nav('/main')} />
          <ListAltIcon className="cursor-pointer" />
          <CreateIcon className="cursor-pointer" onClick={()=>nav('/post')}/>
          <PeopleOutlineIcon className="cursor-pointer" onClick={()=>nav("/users")}/>
          <NotificationsIcon className="cursor-pointer"/>
        </div>
        <div>
          <input
            className="enter-cred"
            type="text"
            placeholder=" &#128269; Search Quora"
          />
        </div>
        <div>
          <LogoutButton />
        </div>
      </nav>
    </div>
  );
}

export default DashNav;
