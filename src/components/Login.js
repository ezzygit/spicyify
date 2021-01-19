import React from 'react';
import { loginUrl } from '../spotify';
import './Login.css';


function Login() {
    return (
        <div className="login">
        
        <img src="https://1000marcas.net/wp-content/uploads/2019/12/Spotify-logotipo.jpg"
        alt=""/>
        
        <a href={loginUrl}> LOGIN WITH SPOTIFY</a>
            
        </div>
    )
}

export default Login;
