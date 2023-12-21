import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Sidebar_nav from './components/sidebar/Sidebar_nav';
import Sidebar_right from './components/sidebar_right/sidebar_right';
import { ProSidebarProvider } from "react-pro-sidebar";
import MainContent from './components/MainContent/MainContent';
import  NotFound  from './components/PageNotFound/NotFound';
import Help from './components/help/Help.js';
// import cursor_img from '../src/asserts/images/cursor.png';

function App() {
  const cursor = useRef(null)
  const changePosition = (e) => {
    cursor.current.style.top = `${e.clientY}px`;
    cursor.current.style.left = `${e.clientX}px`;
  }
  return (
    <div className="App" onMouseMove={changePosition}>
      <Router>
        <div className="cursor-style" ref={cursor} ></div>
        <div className='dim-overlay'></div>
        <Navbar/>
        <Sidebar_nav/> 
        <ProSidebarProvider>
          <Sidebar_right/>
        </ProSidebarProvider>
        <Routes>
          <Route path="/" exact element={<MainContent/>} />
          <Route path="/battleField4/soldier" element={<MainContent/>} />
          <Route path="/battleField4" element={<MainContent/>} />
          <Route path="/help" element={<Help/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
