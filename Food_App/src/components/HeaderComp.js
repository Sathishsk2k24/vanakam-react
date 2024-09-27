import { LOGO_URL } from "../utils/constants";
const HeaderComp = () =>{
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
                    </ul>
                </div>
        </div>
    )
};

export default HeaderComp