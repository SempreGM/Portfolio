import React from "react";
import './navbar.css';
import Footer from "../Footer/footer";

function Navbar (){
    return (
        <>
            <div className="navbar">
                <p>Home</p>
                <p>About</p>
                <p>Projects</p>
                <p>Contact</p>
            </div>
            <Footer/>
        </>
    )
}

export default Navbar;
