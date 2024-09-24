import React from "react";
import ReactDOM from 'react-dom';

/*Header
Body
Footer*/

const AppLayout = () => {
    return(
        <div className="App">
            <HeaderComp/>
            <BodyComp/>
        </div>
    )
};

const HeaderComp = () =>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"/>
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

const BodyComp = () =>{
    return (
        <div className="body">
            <div className="search-container">Search</div> 
            <div className="rest-container">
                <RestComp/>
            </div>
        </div>
    )
};

const RestComp = () => {
    return(
        <div className="restro-container">
            <img></img>
            <h3>Food Name</h3>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);