import { useRouteError } from "react-router-dom"
const Error = () => {
    const err = useRouteError();
    console.log(err);
    return <div>
        <h1>OOPS! There is some error in page </h1>
        <h2>{err.status}: {err.statusText}</h2>
        <h2>{err.data}</h2>
        <h3>pls rectifiy above error to proceed</h3>
    </div>
}

export default Error