const heading = React.createElement("h1", { id: "heading" }, "Hello World From react!"); //1.tag 2.attributes 3.content
//heading is nothing but an js object

const heading2 = React.createElement(
        "div", { id: "parent" },
                React.createElement(
        "div", { id: "child" },
        [
        React.createElement("h1", {}, "Im a H1 Tag!"),
        React.createElement("h2", {}, "Im a H2 Tag!")
        ]))
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading2); //render method is responsible for converting the JS object as an tag and putting inside root