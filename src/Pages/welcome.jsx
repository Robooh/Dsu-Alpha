/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useRef, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import './Css/welcome.css'
import { FaGooglePlus } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



const Welcome = () => {
    const [isActive, setIsActive] = useState(false);
    const containerRef = useRef(null);
    const registerBtnRef = useRef(null);
    const loginBtnRef = useRef(null);
  
    useEffect(() => {
        if (isActive) {
          containerRef.current.classList.add("active");
        } else {
          containerRef.current.classList.remove("active");
        }
      }, [isActive]);

    return (
        
        <div className="bc-page">
            <div className="container" ref={containerRef} id="container">
                <div className="form-container sign-up">
                    <form>
                        <h1>Criar Conta</h1>
                        <div className="social-icons">
                            <a href="#" className="icon">
                                <FaGooglePlus/>
                            </a>
                            <a href="#" className="icon">
                                <FaFacebook/>
                            </a>
                            <a href="#" className="icon">
                                <FaTwitter/>
                            </a>
                            <a href="#" className="icon">
                                <FaLinkedin/>
                            </a>
                        </div>
                        <span>Ou use o seu email para registrar-se</span>
                        <input type="text" placeholder="Nome"/>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Senha" />
                        <button id="register">Registrar</button>
                    </form>
                </div>

                <div className="form-container sign-in">
                    <form>
                        <h1>Entre na sua Conta</h1>
                        <div className="social-icons">
                            <a href="#" className="icon">
                                <FaGooglePlus/>
                            </a>
                            <a href="#" className="icon">
                                <FaFacebook/>
                            </a>
                            <a href="#" className="icon">
                                <FaTwitter/>
                            </a>
                            <a href="#" className="icon">
                                <FaLinkedin/>
                            </a>
                        </div>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Senha" />
                        <a href="#">Esqueceu sua senha?</a>
                        <Link to="/products"><button>Entrar</button></Link>
                    </form>
                </div>
                <div className="toggle-container">
                    <div className="toggle">
                        <div className="toggle-panel toggle-left">
                            <h1>Bem vindo novamente</h1>
                            <p>Entre seus dados para acessar nosso site.</p>
                            <button ref={loginBtnRef} className="hidden" id="login" onClick={() => setIsActive(false)}>Entrar</button>
                        </div>
                        <div className="toggle-panel toggle-right">
                            <h1>Seja bem vindo Senhor(a)</h1>
                            <p>Registre seus detalhes pessoais para usar nosso site ao 100%</p>
                            <button ref={registerBtnRef} id="register" onClick={() => setIsActive(true)}>Crie sua conta aqui</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Welcome;
