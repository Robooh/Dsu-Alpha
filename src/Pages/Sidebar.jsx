/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { FaBars,  FaBreadSlice, FaAngleRight} from 'react-icons/fa';
import Logo from './Imgs/imagens/Logo-bg.png';
import './Css/sidebar.css'
import { Link } from 'react-router-dom';
import userImage from './Imgs/Arisu 2.0.png';
import Robo_oh from './Imgs/imagens/Assinatura_Robo_oh.png'
import { FaAngleDown } from 'react-icons/fa';



const Sidebar = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const handleDropDownToggle = () => {
    setDropDownOpen(!dropDownOpen);
  }

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <aside id="mySidebar" className={`sidebar ${isOpen? 'open' : 'closed'}`}>
      <header className="sidebar-header">
        <div className="logo-container">
      <img className="logo" src={Logo} alt="Logo" />
      </div>
      </header>

    <div className="user-info">
        <img src={userImage} alt="Img-Perfil" />
        <span>Robo_oh</span>
      <div className="dropdown-container">
        <button className="dropdown-btn" onClick={handleDropDownToggle}>
          <FaAngleDown/>
        </button>
        <ul  className={`dropdown-menu ${dropDownOpen? 'open' : 'closed'}`}>
        <li><a href="#">Configurações</a></li>
        <li><a href="#">Endereço</a></li>
        <li><a href="#">Cartão</a></li>
        <li><a href="#">Sair</a></li>
        </ul>
      </div>
    </div>

      
      <button className='toggle-btn' id="toggle-button" onClick={handleToggle}>
        <FaAngleRight />
      </button>

      <nav id="main" className='nav-item'>
      <Link to="/"><button id="link1"> 
          <span>
            <FaBars />
            <span>Retornar</span>
          </span>
        </button>
        </Link>
        
        
        <button id="link2">
          <span>
            <FaBreadSlice />
            <Link to="/products"><span>Menu</span></Link>
          </span>
        </button>
      </nav>

      <div className="sidebar-footer">
        <a href="https://github.com/Robooh" target='_blank' rel='noopener noreferrer' >
          <img src={Robo_oh} alt="Robo_oh" />
          <span>Projeto criado por Robo_oh</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;