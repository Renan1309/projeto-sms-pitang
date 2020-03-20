import React, { Component } from 'react';

import './LoginStyle.css'
import logopitang from '../../assets/logopitang.PNG';


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
       // this.state = new LoginState();
        this.state = {
            login  : new LoginState(),
            validalogin : false,
            passwordlogin :false
        }
    }


  setEmail = event => {
        this.state.login.email = event.target.value;
        this.setState(new LoginState(this.state.login.email));
        if(!this.state.login.email){
            this.setState({validalogin: true}); 
            console.log(this.state.validalogin);
            console.log("email vazio");
            return;
            
        }
    }
   
   setPassword = event => {
    this.state.login.password = event.target.value;
    this.setState(new LoginState(this.state.login.password));
}
 
    submitlistener = event => {
        event.preventDefault();
     
        if(!this.state.login.email){
            this.setState({validalogin: true}); 
            console.log(this.state.validalogin);
            console.log("email vazio");
            return;
            
        }
        else if(!this.state.login.password){
            this.setState({passwordlogin: true}); 
            console.log("senha vazio");
            return;
            
        }
        this.setState({validalogin: false}); 

      
        if(this.props.envialogin){
            console.log("A funcao via props veio !")
            this.props.envialogin(this.state.login);
        }
         this.setState({login: new LoginState()});
        
    }


    render() {
        console.log(this.state.login);

        return (
            <>

                <p>{this.state.login.email}</p>
                <p>{this.state.password}</p>

                <div className="container">
                    <img src={logopitang} alt="LogoPitang"></img>

                    <div className="combo">
                        <p><strong>SIGN IN</strong></p>

                        <form onSubmit={this.submitlistener} >
                        <div className="form-row">
                            <label >Login</label>
                            <input onChange={this.setEmail} value={this.state.login.email} type="text" id="email" placeholder="login@pitang.com"  className= {"form-control"+(this.state.validalogin ? ' is-invalid' : '')}  ></input>
                               <div className="invalid-feedback">
                                   Please choose a login.
                               </div>
                        </div>
                        <div className="form-row">
                            <label >Senha</label>
                            <input onChange={this.setPassword} value={this.state.login.password}  id="password"  type="password" className={"form-control"+(this.state.passwordlogin ? ' is-invalid' : '')} ></input>
                            <div className="invalid-feedback">
                                   Please choose a login.
                               </div>
                         </div>

                        <div>
                               <div className="form-check">
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
