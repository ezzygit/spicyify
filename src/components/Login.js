import React from 'react';
import { loginUrl } from '../spotify';
import './Login.css';
import spiceify from './spiceifyjsfinal1.png';


function Login() {
    return (
        <div className="login">
        
        <img src={spiceify}
        alt=""/>
        
        <a href={loginUrl}> LOGIN WITH SPICY SPOTIFY</a>
            
        </div>
    )
}

export default Login;
