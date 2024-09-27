import React from "react";
import ReactDOM from 'react-dom';
import HeaderComp from "./components/HeaderComp";
import BodyComp from "./components/BodyComp";

  const AppLayout = () => {
    return(
        <div className="App">
            <HeaderComp/>
            <BodyComp/>
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);