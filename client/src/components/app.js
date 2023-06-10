import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import {BrowserRouter as Router, Routes, Route, link} from "react-router-dom";

import login from "./components/login_component";
import signup from "./components/signup_component"

function app(){
    return (
        <Router>
            <div className="app">
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <Routes>
                            <Route exact path="/" element={<login />} />
                            <Route path="/sign-in" element={<login />} />
                            <Route path="/sign-up" element={<signup />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default app;