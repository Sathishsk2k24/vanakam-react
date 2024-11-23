import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const HeaderComp = () =>{
    const [btnName, setBtnName] = useState("Login");
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src= {LOGO_URL}/>
                </div>
                <div className="nav-items">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to ="/Contact">Contact</Link></li>
                        <li>Cart</li>
                        <li><button className="btn-login" onClick={()=>{
                            setBtnName(btnName == "Login" ? "Logout" : "Login");
                        }}>{btnName}</button></li>
                    </ul>
                </div>
        </div>
    )
};

export default HeaderComp