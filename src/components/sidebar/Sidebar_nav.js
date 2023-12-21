import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { useState } from "react";
import HelpIcon from '@mui/icons-material/Help';
import LogoutIcon from '@mui/icons-material/Logout';
import side1 from "../../asserts/images/side-menu__game_1.png";
import side2 from "../../asserts/images/side-menu__game_2.png";
import side3 from "../../asserts/images/side-menu__game_3.png";
import side4 from "../../asserts/images/side-menu__game_4.png";
import side5 from "../../asserts/images/side-menu__career_5.png";
import side6 from "../../asserts/images/play.jpg";
import side7 from "../../asserts/images/news.png";
import "./Sidebar.css"
import { Link } from "react-router-dom";

function Sidebar_nav() {
  const [isSide1DescVisible, setSide1DescVisible] = useState(false);
  const [isSide2DescVisible, setSide2DescVisible] = useState(false);
  const [isSide3DescVisible, setSide3DescVisible] = useState(false);
  const [isSide4DescVisible, setSide4DescVisible] = useState(false);
  const [isSide5DescVisible, setSide5DescVisible] = useState(false);
  const [isSide6DescVisible, setSide6DescVisible] = useState(false);
  const [isSide7DescVisible, setSide7DescVisible] = useState(false);
  const [isSide8DescVisible, setSide8DescVisible] = useState(false);
  const [isSide9DescVisible, setSide9DescVisible] = useState(false);

  const handleMenuHover1 = () => {
    setSide1DescVisible(true);
  };

  const handleMenuLeave1 = () => {
    setSide1DescVisible(false);
  };

  const handleMenuHover2 = () => {
    setSide2DescVisible(true);
  };

  const handleMenuLeave2 = () => {
    setSide2DescVisible(false);
  };
  const handleMenuHover3 = () => {
    setSide3DescVisible(true);
  };

  const handleMenuLeave3 = () => {
    setSide3DescVisible(false);
  };
  const handleMenuHover4 = () => {
    setSide4DescVisible(true);
  };

  const handleMenuLeave4 = () => {
    setSide4DescVisible(false);
  };
  const handleMenuHover5 = () => {
    setSide5DescVisible(true);
  };

  const handleMenuLeave5 = () => {
    setSide5DescVisible(false);
  };

  const handleMenuHover6 = () => {
    setSide6DescVisible(true);
  };

  const handleMenuLeave6 = () => {
    setSide6DescVisible(false);
  };
  const handleMenuHover7 = () => {
    setSide7DescVisible(true);
  };

  const handleMenuLeave7 = () => {
    setSide7DescVisible(false);
  };

  const handleMenuHover8 = () => {
    setSide8DescVisible(true);
  };

  const handleMenuLeave8 = () => {
    setSide8DescVisible(false);
  };
  const handleMenuHover9 = () => {
    setSide9DescVisible(true);
  };

  const handleMenuLeave9 = () => {
    setSide9DescVisible(false);
  };

  return (
    <div style={({ width: "30px", height: "100vh" }, { position: "absolute",top: "0px", left: "0px", display: "flex" })}>
      <Sidebar backgroundColor= "transparent" width="50px" style={{padding:"2px", paddingTop:"120px", height: "83vh", borderRight: "1px solid grey" }}>
      <Menu
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              if (level === 0) {
                return {
                  padding: "10px",
                  cursor:'none',
                  borderLeft: active ? "3px solid #f69a05e9" : undefined,
                  marginLeft: active ? "0px":"2px",
                  "&:hover": {
                     backgroundColor: "transparent !important",
                   },
                };
              }
            },
          }}
        >
          {/* <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center" }}
          >
            {" "}
            <h2>Admin</h2>
          </MenuItem> */}
          <Link to='/battlefieldV'
            className="menuitem1"
            onMouseEnter={handleMenuHover1}
            onMouseLeave={handleMenuLeave1}
          >
            <MenuItem active={window.location.pathname === "/battlefieldV"} icon={<img className="menuimg" src={side1}></img>}></MenuItem>
          </Link>
          <Link to='/battlefield1'
            className="menuitem2"
            onMouseEnter={handleMenuHover2}
            onMouseLeave={handleMenuLeave2}
          >
            <MenuItem active={window.location.pathname === "/battlefield1"} icon={<img className="menuimg" src={side2}></img>}></MenuItem>
          </Link>
          <Link to='/battlefield4'
            className="menuitem3"
            onMouseEnter={handleMenuHover3}
            onMouseLeave={handleMenuLeave3}
          >
            <MenuItem active={window.location.pathname === "/battlefield4"} icon={<img className="menuimg" src={side3}></img>}></MenuItem>
          </Link>
          <Link to='/battlefieldHardline'
            className="menuitem4"
            onMouseEnter={handleMenuHover4}
            onMouseLeave={handleMenuLeave4}
          >

            <MenuItem active={window.location.pathname === "/battlefieldHardline"} icon={<img className="menuimg" src={side4}></img>}></MenuItem>
          </Link>
          <Link to='/career'
            className="menuitem5"
            onMouseEnter={handleMenuHover5}
            onMouseLeave={handleMenuLeave5}
          >

            <MenuItem active={window.location.pathname === "/career"} icon={<img className="menuimg" src={side5}></img>}></MenuItem>
          </Link>
          <Link to='/watch' 
            className="menuitem6"
            onMouseEnter={handleMenuHover6}
            onMouseLeave={handleMenuLeave6}
          >
            <MenuItem active={window.location.pathname === "/watch"} icon={<img className="menuimg" src={side6}></img>}></MenuItem>
          </Link>
          <Link to='/news'
            className="menuitem7"
            onMouseEnter={handleMenuHover7}
            onMouseLeave={handleMenuLeave7}
          >
            <MenuItem active={window.location.pathname === "/news"} icon={<img className="menuimg" src={side7}></img>}></MenuItem>
          </Link>
          <Link to='/help'
            className="menuitem8"
            onMouseEnter={handleMenuHover8}
            onMouseLeave={handleMenuLeave8}
          >
            <MenuItem active={window.location.pathname === "/help"} icon={<HelpIcon className="menuimg8"/>}></MenuItem>
          </Link>
          <div 
            className="menuitem9"
            onMouseEnter={handleMenuHover9}
            onMouseLeave={handleMenuLeave9}
          >
            <MenuItem icon={<LogoutIcon className="menuimg8"/>}></MenuItem>
          </div>
        </Menu>
      </Sidebar>
      <div className="side1desc"
        style={{ display: isSide1DescVisible ? "block" : "none" }}>BATTLEFIELD V</div>
      <div className="side2desc"
        style={{ display: isSide2DescVisible ? "block" : "none" }}>BATTLEFIELD 1</div>
      <div className="side3desc"
      style={{ display: isSide3DescVisible ? "block" : "none" }}>BATTLEFIELD 4</div>
      <div className="side4desc"
      style={{ display: isSide4DescVisible ? "block" : "none" }}>BATTLEFIELD HARDLINE</div>
      <div className="side5desc"
      style={{ display: isSide5DescVisible ? "block" : "none" }}>CAREER</div>
      <div className="side6desc"
      style={{ display: isSide6DescVisible ? "block" : "none" }}>WATCH</div>
      <div className="side7desc"
      style={{ display: isSide7DescVisible ? "block" : "none" }}>NEWS</div>
      <div className="side8desc"
      style={{ display: isSide8DescVisible ? "block" : "none" }}>HELP</div>
      <div className="side9desc"
      style={{ display: isSide9DescVisible ? "block" : "none" }}>QUIT</div>
    </div>
  );
}

export default Sidebar_nav;