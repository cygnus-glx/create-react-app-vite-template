
import React, {useState,useEffect} from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import DashboardPage from "./Pages/DashboardPage/DashboardPage";
import HomePage from "./Pages/HomePage/HomePage";


function App(){

    return(
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/dashboard" element={<DashboardPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;