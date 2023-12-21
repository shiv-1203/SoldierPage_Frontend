import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { useState } from "react";
import vector from "../../asserts/images/Vector.png";
import offline from "../../asserts/images/offline.png";
import AddIcon from '@mui/icons-material/Add';
import RadioButtonCheckedRoundedIcon from '@mui/icons-material/RadioButtonCheckedRounded';
import onlineImg from "../../asserts/images/image 1.png";
import offlineImg from "../../asserts/images/image 2.png";
import "./sidebar_right.css";

function Sidebar_right() {
const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
    useProSidebar();
  const toggle = () => {
    toggleSidebar();
    if (toggled) {
      console.log(true);
      collapseSidebar();
    } else {
      console.log(false);
      collapseSidebar();
    }
  };
  const [isSide1DescVisible, setSide1DescVisible] = useState(false);

  const handleMenuHover1 = () => {
    setSide1DescVisible(true);
  };

  const handleMenuLeave1 = () => {
    setSide1DescVisible(false);
  };

  return (
    <div style={({height: "100vh" }, { position: "absolute",top: "0px", right: "0px",display: "flex", flexDirection: "row-reverse" })}>
      <Sidebar width="200px" className="sidebar_right" collapsedWidth="60px" defaultCollapsed={true} backgroundColor= "transparent" style={{paddingTop:"29px", height: "95vh", border:"none" }}>
      <Menu
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              if (level === 0) {
                return {
                  // padding: "10px",
                  cursor:'none',
                  borderLeft: active ? "3px solid #f69a05e9" : undefined,
                  marginLeft: active ? "2px":"0px",
                  "&:hover": {
                     backgroundColor: "transparent !important",
                   },
                };
              }
            },
          }}
        >
            <MenuItem className="menuitem1_1"
            onMouseEnter={() => {
                collapseSidebar();
                handleMenuHover1();
            }}
            onMouseLeave={() => {
                collapseSidebar();
                handleMenuLeave1();
            }} style={{margin:"0px", padding:"0px", marginLeft:"10px"}}><img className="vectorLogo" src={vector}></img> 
            <span className="squadJoinName" style={{display: isSide1DescVisible ? "block" : "none"}}>SQUAD</span></MenuItem>
            <MenuItem className="menuitem1_2"
            onMouseEnter={() => {
                collapseSidebar();
                handleMenuHover1();
            }}
            onMouseLeave={() => {
                collapseSidebar();
                handleMenuLeave1();
            }} style={{margin:"0px", padding:"0px", marginTop:"2px", marginLeft:"10px"}}>
              <div className="squadClub">
                < AddIcon className="squadAddLogo" style={{height:"18px", width:"18px"}}/>
                <span className="squadJoin" style={{display: isSide1DescVisible ? "block" : "none"}}>Squad Join</span>
              </div>
              
            </MenuItem>
          <MenuItem className="menuitem1_1"
            onMouseEnter={() => {
                collapseSidebar();
                handleMenuHover1();
            }}
            onMouseLeave={() => {
                collapseSidebar();
                handleMenuLeave1();
            }} style={{margin:"0px", padding:"0px", marginLeft:"10px"}}>
              <RadioButtonCheckedRoundedIcon style={{ height: "15px",color: "white"}}/> 
              <span className="online" style={{display: isSide1DescVisible ? "block" : "none"}}>ONLINE</span></MenuItem>
            <MenuItem className="menuitem1_2"
            onMouseEnter={() => {
                collapseSidebar();
                handleMenuHover1();
            }}
            onMouseLeave={() => {
                collapseSidebar();
                handleMenuLeave1();
            }} style={{margin:"0px", padding:"0px", marginTop:"2px", marginLeft:"12px"}}>
              <div className="squadClub">
                <img src={onlineImg} style={{height:"37px", width:"35px",borderLeft:"3px solid green"}}></img>
                <span className="OnlineJoin" style={{display: isSide1DescVisible ? "block" : "none"}}>MoryJone <div>Online</div></span>
              </div>
              
            </MenuItem>
          <MenuItem className="menuitem1_1"
            onMouseEnter={() => {
                collapseSidebar();
                handleMenuHover1();
            }}
            onMouseLeave={() => {
                collapseSidebar();
                handleMenuLeave1();
            }} style={{margin:"0px", padding:"0px", marginLeft:"10px"}}>
              <img style={{ height: "15px",color: "white", marginLeft: "5px"}} src={offline}></img>
              <span className="offline" style={{display: isSide1DescVisible ? "block" : "none"}}>OFFLINE</span></MenuItem>
            <MenuItem className="menuitem1_2"
            onMouseEnter={() => {
                collapseSidebar();
                handleMenuHover1();
            }}
            onMouseLeave={() => {
                collapseSidebar();
                handleMenuLeave1();
            }} style={{margin:"0px", padding:"0px", marginTop:"2px", marginLeft:"12px"}}>
              <div className="squadClub1">
                <img src={offlineImg} style={{ height:"37px", width:"35px", borderLeft:"3px solid white"}}></img>
                <span className="OnlineJoin" style={{display: isSide1DescVisible ? "block" : "none"}}>420 <div>Offline</div></span>
              </div>
            </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default Sidebar_right;