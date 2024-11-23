import React from "react"
class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            department: "Marketing",
            count: 0,
            name: "qwerty",
        }
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/sathishkumar");
        const json = await data.json();
        this.setState({
            name: json.login
        })
    }
    render() {
        const {name } = this.state;
        return (<div className="user-container">
            <h1>User Details - Class</h1>
            <h3>Name: {name}</h3>
            <h3>Department: {this.state.department}</h3>
            <h4>Contact: sathish@companyname.com</h4>
            <h5>State Variable Example: </h5>
            <h5>Count: {this.state.count}</h5>
            <button onClick={()=>{
                //in-built setter provided to update state variable..we can send updated object as parameter
                this.setState({
                    count: this.state.count + 1
                })
            }}>Click me to update count</button>
        </div>)
    }
}

export default UserClass