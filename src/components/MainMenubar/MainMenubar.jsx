import React from "react";
import { Link } from "react-router-dom";
import "./MainMenubar.css";

const MainMenubar = () =>{

    return(
        <div className="mainMenuBar">
            <ul className="menuItemList">
                <li>
                    <Link style={{textDecoration: 'none', color: 'white'}} to="/">HOME</Link>
                </li>
                <li>
                    <Link style={{textDecoration: 'none', color: 'white'}} to="/dashboard">DASHBOARD</Link>
                </li>
            </ul>
        </div>
    )
}

export default MainMenubar;