import React, {useState,useEffect} from "react";
import LayoutWidget from "../../Widgets/LayoutWidget/LayoutWidget";
import "./HomePage.css";


const HomePage = () =>{

    return(
        <LayoutWidget>
            <div className="homePage">
                <h1>Home Page</h1>
            </div>
        </LayoutWidget>
    )
}

export default HomePage;