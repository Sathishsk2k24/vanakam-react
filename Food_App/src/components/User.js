const User = ({name}) => { //we can receive like props or we can do object de-structing
    return (<div className="user-container">
        <h1>User Details - Function</h1>
        <h3>Name: {name}</h3>
        <h3>Department: Sales</h3>
        <h3>Contact: sathishSK@companyname.com</h3>
    </div>)
}

export default User