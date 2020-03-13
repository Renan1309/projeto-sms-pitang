import React , { Component } from 'react';

import './LoginStyle.css'
import logopitang from '../assets/logopitang.PNG'

class LoginComponent extends Component{

    state = {
        email :'',
        password : ''

    };


render(){


    return(
        <>
      
        <div className="container">
            <img src={logopitang}  alt="LogoPitang"></img>
           
            <div className="combo">
                <p><strong>SIGN IN</strong></p>

                <form>
                    <label >Login</label>
                    <input type="email" id="email" placeholder="login@pitang.com"></input>
                    <label >Senha</label>
                    <input type="password" id="senha" placeholder="**********"></input>
                    <button className="btnSI" type="submit" >SIGN IN</button>
                    <button className="btnSU" type="submit" >SIGN UP</button>

                   
                </form>

            </div>
        </div>
        </>
    );

}

}
export default LoginComponent;
