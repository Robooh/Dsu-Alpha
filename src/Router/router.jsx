import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import Welcome from "../Pages/welcome";
import MainLayout from "../mainPage/main";
import Cart from "../Pages/cart";


const AppRoutes = () => {

    return(
    <BrowserRouter>
    <Routes>
            <Route exact path="/" element={<Welcome/>} />
            <Route path="/products" element={<MainLayout/>} />
            <Route path="/cart"  element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
    )
}


export { AppRoutes }