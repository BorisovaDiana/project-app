import React from 'react';
import Home from "./components/home";
import {Route} from "react-router-dom";
import {Routes} from "react-router-dom";
import PrivateRoute from "./utils/router/privateRoute";
import AuthRootComponent from './components/auth';


export default function App () {
    return (
        <div className="app">
            <Routes>
                <Route element={<PrivateRoute />}>
                    <Route path="/" element={<Home/>}/>
                </Route>
                <Route path="login" element={<AuthRootComponent/>}/>
                <Route path="register" element={<AuthRootComponent/>}/>
            </Routes>
        </div>
    );
};