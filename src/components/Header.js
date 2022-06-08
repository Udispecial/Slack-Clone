import React from "react";
import "./Header.css";
import { Avatar } from "@mui/material";
import ScheduleIcon from "@mui/icons-material/Schedule";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useStateValue } from "../StateProvider";

function Header() {
  const [{ user }] = useStateValue();
  return (
    <div className="header">
      <div className="header__left">
        <Avatar
          className="header__avartar"
          alt={user?.displayName}
          src={user?.photoURL}
        />
        <ScheduleIcon />
      </div>
      <div className="header__search">
        <SearchIcon />
        <input type="text" placeholder="Search My Work Space" />
      </div>
      <div className="header__right">
        <HelpOutlineIcon />
      </div>
    </div>
  );
}

export default Header;
