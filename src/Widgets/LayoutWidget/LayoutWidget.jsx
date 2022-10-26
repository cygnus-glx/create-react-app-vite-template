import React from "react";
import MainMenubar from "../../components/MainMenubar/MainMenubar";
import "./LayoutWidget.css";


const LayoutWidget = (props) =>{
    return(
        <div className="layoutWidget">
            <MainMenubar/>
            {props.children}
        </div>
    )
}
export default  LayoutWidget;