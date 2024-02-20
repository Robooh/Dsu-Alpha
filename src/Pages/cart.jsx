import React from "react";
import Sidebar from "./Sidebar";
import './Css/cart.css'
import { useLocation } from "react-router-dom";

const Cart = () => {
    const location = useLocation();
    const products = location.state?.products || [];

    const totalPrice = products.reduce((total, product) => total + product.price, 0)

    return (
        <main>
        <Sidebar/>
            <div className="cart">
                <h2>Lista de Pedidos</h2>
                <ul>
                    {products.map((product) => (
                       <li key={product.id}>
                            <h2>{ product.name }</h2>
                            <img src={product.image} alt="" />
                            <p>R${product.price}</p>
                       </li> 
                    ))}
                </ul>
                <p>Total: R${totalPrice.toFixed(2)}</p>
                <button onClick={() => alert('Seu pedido foi confirmado')} className="btn" >Confirmar Pedido  </button>
            </div>
        </main>
    )
}

export default Cart