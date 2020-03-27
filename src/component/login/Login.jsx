import React, { Component } from 'react';

import './LoginStyle.css'
import logopitang from '../../assets/images/logopitang.PNG';


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
class Login extends Component {

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
             <p className="combo-tite"><strong>SIGN IN</strong></p>
                   <form onSubmit={this.submitlistener} >
                        <div className="form-group">
                            <label >Login</label>
                            <input onChange={this.setEmail} value={this.state.login.email} type="text" id="email" placeholder="login@pitang.com"  className= {" rounded-0 p-2 form-control"+(this.state.validalogin ? ' is-invalid' : '')}  ></input>
                               <div className="invalid-feedback">
                                   Please choose a login.
                               </div>
                        </div>
                        <div className="form-group">
                            <label >Senha</label>
                            <input onChange={this.setPassword} value={this.state.login.password}  id="password"  type="password" className={"rounded-0 p-2 form-control"+(this.state.passwordlogin ? ' is-invalid' : '')} ></input>
                            <div className="invalid-feedback">
                                   Please choose a login.
                            </div>
                         </div>

                        <div>
                            <div className="form-check mb-2 mt-2">
                                 <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                 <label className="form-check-label" hmlfor="exampleCheck1">Remember Me</label>
                            </div>
                        </div>
                        <button className="btn-si" type="submit">SIGN IN</button>
                        <button className="btn-su" type="submit" >SIGN UP</button>
                   </form>

            </>
        );

    }

}
export default Login;
