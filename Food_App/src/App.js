import React from "react";
import ReactDOM from 'react-dom';
import HeaderComp from "./components/HeaderComp";
import BodyComp from "./components/BodyComp";
import About from "./components/About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestarauntMenu from "./components/RestarauntsMenu"

  const AppLayout = () => {
    return(
        <div className="App">
            <HeaderComp/>
            <Outlet/>
        </div>
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
        {
            path: "/",
            element: <BodyComp/>,
        },
        {
            path: "/about",
            element: <About/>,
        },
        {
            path: "/contact",
            element: <Contact/>,
        },{
            path:"restaraunt/:resId",
            element:<RestarauntMenu/>
        }]
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);