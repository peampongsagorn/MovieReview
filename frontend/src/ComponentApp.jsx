import Actions from "./ComponentTitle/Actions";
import Comedy from "./ComponentTitle/Comedy";
import Drama from "./ComponentTitle/Drama";
import Fantasy from "./ComponentTitle/Fantasy";
import Home from "./ComponentTitle/Home";
import Kids from "./ComponentTitle/Kids";
import Romantic from "./ComponentTitle/Romantic";
import Navbar from "./ComponentHome/ComponentNavbar";

import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import Navbar from "./ComponentHome/ComponentNavbar";


const ComponentApp = () => {
    return(
        <div>
            <BrowserRouter>
                <ComponentNavbar/>
                <Home/>
                <Comedy/>
                <Drama/>
                <Fantasy/>
                <Kids/>
                <Romantic/>
                <Actions/>
                </BrowserRouter>
        </div>
    )
}

export default ComponentApp