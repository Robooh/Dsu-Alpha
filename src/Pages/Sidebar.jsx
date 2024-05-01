import React, { useState } from 'react';
import { FaBars,  FaBreadSlice, FaAngleRight} from 'react-icons/fa';
import Logo from './Imgs/imagens/Logo-bg.png';
import './Css/sidebar.css'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <aside id="mySidebar" className={`sidebar ${isOpen? 'open' : 'closed'}`}>
      <header className="sidebar-header">
      <img className="logo" src={Logo} alt="Logo" />
      </header>

      <nav id="main" className=''>
      <button className='toggle-btn' id="toggle-button" onClick={handleToggle}>
        <FaAngleRight />
      </button>

      <Link to="/"><button id="link1" className='nav-item'> 
          <span>
            <FaBars />
            <span>Menu</span>
          </span>
        </button>
        </Link>
        
        
        <button id="link2" className='nav-item'>
          <span>
            <FaBreadSlice />
            <Link to="/products"><span>Lanches</span></Link>
          </span>
        </button>

        {/* color to use #8181A4; */}
      </nav>
    </aside>
  );
};

export default Sidebar;