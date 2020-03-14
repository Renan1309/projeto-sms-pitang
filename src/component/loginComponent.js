import React, { Component } from 'react';

import './LoginStyle.css'
import logopitang from '../assets/logopitang.PNG'

class LoginState {
    constructor(data) {
        this.email = '';
        this.password = '';
        if(data){
            this.email = data.email;
            this.password = data.password;
        }

    }
}
class LoginComponent extends Component {

    constructor() {
        super();
        this.state = new LoginState();
        //this.setPassword = this.setPassword.bind(this);  

    }


    setEmail = event => {
        this.state.email = event.target.value;
        this.setState(new LoginState(this.state));
    }
    /*
    Modo antigo que eu estava fazendo
    setEmail(evento){
        this.setState({email:evento.target.value}); 
      }
      form.login = e.target.value
    */
   setPassword = event => {
    this.state.password = event.target.value;
    this.setState(new LoginState(this.state));
}
   /*
    setPassword(event) {
        this.state.password = event.target.value;
        this.setState(this.state.copy);
    }
*/
    submitlistener = event => {
        alert("Form de login  Email : " + this.state.email + " Password : " + this.state.password);
    }


    render() {


        return (
            <>

                <p>{this.state.email}</p>
                <p>{this.state.password}</p>

                <div className="container">
                    <img src={logopitang} alt="LogoPitang"></img>

                    <div className="combo">
                        <p><strong>SIGN IN</strong></p>

                        <form onSubmit={this.submitlistener}>
                            <label >Login</label>
                            <input onChange={this.setEmail} value={this.state.email} type="email" id="email" placeholder="login@pitang.com"></input>
                            <label >Senha</label>
                            <input onChange={this.setPassword} value={this.state.password} type="password" id="senha" placeholder="**********"></input>
                           <div>
                            <div class="form-check">
                              <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                           
                              <label className="form-check-label" hmlfor="exampleCheck1">Remember Me</label>
                           
                            </div>
                            </div>
                            <button className="btnSI" type="submit">SIGN IN</button>
                            <button className="btnSU" type="submit" >SIGN UP</button>


                        </form>

                    </div>
                </div>
            </>
        );

    }

}
export default LoginComponent;
