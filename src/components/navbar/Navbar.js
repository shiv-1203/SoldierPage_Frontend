import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../asserts/images/home__level-icon.png';
import logo_img from '../../asserts/images/home__logo.png';
import { Link, useLocation} from 'react-router-dom';
const Navbar = () => {
  const [activeTab, setActiveTab] = useState('soldier');
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const showNavbar = !['/battlefieldV', '/battlefield1', '/battlefieldHardline', '/career', '/watch', '/news', '/help'].includes(location.pathname);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return showNavbar ? (
    <div className={`navbar`}>
      <span className="mobile-hamburger" onClick={toggleMobileMenu}>
        ☰
      </span>
      {isMobileMenuOpen ? (<div>
        <div className="navbar-tabs-mobile">
        <div className='logo-mobile'>
            <img className="nav-logo-mobile" src={logo}></img>
            <img className="nav-logo-img-mobile" src={logo_img}></img>
          </div>
          <Link to='/battlefield4/home'
            className={`navbar-tab-mobile ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => (handleTabClick('home'),toggleMobileMenu())}
          >
            HOME
          </Link>
          <Link to='/battlefield4/multiplayer'
            className={`navbar-tab-mobile ${activeTab === 'multiplayer' ? 'active' : ''}`}
            onClick={() => (handleTabClick('multiplayer'),toggleMobileMenu())}
          >
            MULTIPLAYER
          </Link>
          <Link to='/battlefield4/campaign'
            className={`navbar-tab-mobile ${activeTab === 'campaign' ? 'active' : ''}`}
            onClick={() => (handleTabClick('campaign'),toggleMobileMenu())}
          >
            CAMPAIGN
          </Link>
          <Link to='/battlefield4/soldier'
            className={`navbar-tab-mobile ${activeTab === 'soldier' ? 'active' : ''}`}
            onClick={() => (handleTabClick('soldier'),toggleMobileMenu())}
          >
            SOLDIER
          </Link>
          <Link to='/battlefield4/store'
            className={`navbar-tab-mobile ${activeTab === 'store' ? 'active' : ''}`}
            onClick={() => (handleTabClick('store'),toggleMobileMenu())}
          >
            STORE
          </Link>
          <Link to='/battlefield4/more'
            className={`navbar-tab-mobile ${activeTab === 'more' ? 'active' : ''}`}
            onClick={() => (handleTabClick('more'),toggleMobileMenu())}
          >
            MORE
          </Link>
        </div></div>)
        : (<div className="navbar-tabs">
        <Link to='/battlefield4/home'
          className={`navbar-tab ${activeTab === 'home' ? 'active' : ''}`}
          onClick={() => handleTabClick('home')}
        >
          HOME
        </Link>
        <Link to='/battlefield4/multiplayer'
          className={`navbar-tab ${activeTab === 'multiplayer' ? 'active' : ''}`}
          onClick={() => handleTabClick('multiplayer')}
        >
          MULTIPLAYER
        </Link>
        <Link to='/battlefield4/campaign'
          className={`navbar-tab ${activeTab === 'campaign' ? 'active' : ''}`}
          onClick={() => handleTabClick('campaign')}
        >
          CAMPAIGN
        </Link>
        <Link to='/battlefield4/soldier'
          className={`navbar-tab ${activeTab === 'soldier' ? 'active' : ''}`}
          onClick={() => handleTabClick('soldier')}
        >
            SOLDIER
        </Link>
        <Link to='/battlefield4/store'
          className={`navbar-tab ${activeTab === 'store' ? 'active' : ''}`}
          onClick={() => handleTabClick('store')}
        >
          STORE
        </Link>
        <Link to='/battlefield4/more'
          className={`navbar-tab ${activeTab === 'more' ? 'active' : ''}`}
          onClick={() => handleTabClick('more')}
        >
          MORE
        </Link>
        <div>
          <img className="nav-logo" src={logo}></img>
          <img className="nav-logo-img" src={logo_img}></img>
        </div>
      </div>)}
    </div>
  ) : null;
};

export default Navbar;
