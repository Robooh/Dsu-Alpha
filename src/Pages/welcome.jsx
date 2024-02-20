import React from "react";
import { Link } from "react-router-dom";
import './Css/welcome.css'
import Risu from  './Imgs/Risu-1.gif'
import  user from './Imgs/Arisu 2.0.png' 


const Welcome = () => {
    return (
        <div className="welcome-page">
            <div className="welcome-content">
                <img src={user}  alt="Robo_oh" className="welcome-img" />
                <div className="welcome-text-container">
                    <h3 className="welcome-title">Bem vindo(a), a lanchonete da Dsu!</h3>
                    <img src={Risu} alt="Arisu" className="welcome-gif"/>
                    <h3  className="welcome-description">Descubra bolos e lanches, que certamente iram te interessar</h3>
                    <Link to="/products" className="welcome-button">Continue por aqui.</Link>
                </div>
            </div>
        </div>
    );
};

export default Welcome;