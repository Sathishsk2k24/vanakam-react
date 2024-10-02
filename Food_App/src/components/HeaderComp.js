import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const HeaderComp = () =>{
    const [btnName, setBtnName] = useState("Login");
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src= {LOGO_URL}/>
                </div>
                <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
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