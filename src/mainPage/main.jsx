import React from "react";
import './mobile.css'
import Sidebar from "../Pages/Sidebar";
import CardComponent from "../Pages/items-card";
import Footer from "../Pages/footer";


const mainLayout = () => (
   <div>
        <Sidebar/>
        <CardComponent/>
        <Footer/>
    </div>
)

export default mainLayout