import React from 'react';
import ReactDOM from 'react-dom';

const heading = React.createElement("h1",{id:"heading"},"Sathish You can do it!");
//Babel converts the jsx into react.createElement,later converts to JS objects which will be render as HTML Element
const jsxHeading = <h1>Sathish you can do this JSX</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
const Title =() => {
    return <h1>Title Functional Component</h1>
}
const Heading = ()=>{
    return (<div>
        <Title/>
        {Title()}
        <h1>React functional Component</h1>
        </div>);
}
root.render(<Heading/>);