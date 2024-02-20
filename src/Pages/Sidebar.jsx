import React from 'react';
import { FaBars,  FaBreadSlice } from 'react-icons/fa';
import Logo from './Imgs/imagens/Logo-bg.png';
import Robo from './Imgs/imagens/Assinatura_Robo_oh.png'
import './Css/sidebar.css'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside id="mySidebar" className="sidebar">
      <header className="sidebar-header">
      <img className="Logo" src={Logo} alt="Logo" />
      </header>

      <nav id="main">
      <Link to="/"><button id="link1"> 
          <span>
            <FaBars />
            <span>Menu</span>
          </span>
        </button>
        </Link>
        
        
        <button id="link2">
          <span>
            <FaBreadSlice />
            <Link to="/products"><span>Lanches</span></Link>
          </span>
        </button>
        



        <div className="dev">
          <h3>Desenvolvido por: <img src={Robo} title="Robs" alt="robs"/></h3>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;