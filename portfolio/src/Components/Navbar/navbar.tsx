import React from "react";
import './navbar.css';
import Footer from "../Footer/footer";
import { Link } from "react-router-dom";

function Navbar (){
    return (
        <>
            <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contatc</Link>
            </div>
            <Footer/>
        </>
    )
}

export default Navbar;
