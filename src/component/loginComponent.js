import React , { Component } from 'react';

import './LoginStyle.css'
import logopitang from '../assets/logopitang.PNG'

class LoginComponent extends Component{

    constructor(){
        super();
        this.state = {
            email :'',
            password : '',
           
            
    
        };
      // this.setEmail = this.setEmail.bind(this);  //pergunta a rubens o pq quando faz function normal ele pede q passe no constructor e com bind(this)
      


    }

   
    setEmail = event => {
        this.setState({email:event.target.value});
    }
    /*
    Modo antigo que eu estava fazendo
    setEmail(evento){
        this.setState({email:evento.target.value}); 
      }
    */
      setPassword = event => {
        this.setState({password:event.target.value});
    }

    submitlistener = event => {
        alert("Form de login  Email : " + this.state.email + " Password : " + this.state.password);
    }


render(){


    return(
        <>

           <p>{this.state.email}</p>
           <p>{this.state.password}</p>
      
        <div className="container">
            <img src={logopitang}  alt="LogoPitang"></img>
           
            <div className="combo">
                <p><strong>SIGN IN</strong></p>

                <form>
                    <label >Login</label>
                    <input onChange ={this.setEmail} value = {this.state.email} type="email" id="email" placeholder="login@pitang.com"></input>
                    <label >Senha</label>
                    <input onChange ={this.setPassword} value = {this.state.password} type="password" id="senha" placeholder="**********"></input>
                    <button className="btnSI" type="submit" onClick = {this.submitlistener}>SIGN IN</button>
                    <button className="btnSU" type="submit" >SIGN UP</button>

                   
                </form>

            </div>
        </div>
        </>
    );

}

}
export default LoginComponent;
