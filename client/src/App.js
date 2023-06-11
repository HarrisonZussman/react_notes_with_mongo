import React from "react";
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import {BrowserRouter as Router, Routes, Route, link} from "react-router-dom";

import Signup from "./components/signup_component"
import Login from "./components/login_component";

function app(){
    return (
        <Router>
            <div className="app">
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <Routes>
                            <Route exact path="/" element={<Login />} />
                            <Route path="/sign-up" element={<Signup />} />
                            <Route path="/sign-in" element={<Login />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default app;