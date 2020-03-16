import React, { Component } from 'react';
import logopitang from '../assets/logopitang.PNG'
import './login/LoginStyle.css'
import cadastroUser from './Cadastro'
import { render } from '@testing-library/react';


class CadastroUsuario extends Component {
  //let cadastro = new cadastroUser();
  //console.log(cadastro);
  constructor() {
    super();
   // this.state = new cadastroUser();
    this.state = {
        cadastro  : new cadastroUser(),
    }
}

setCadastroUser =event => {
  this.state.cadastro.email = event.target.value;
  this.setState(new CadastroUsuario(this.state.cadastro.email));

  this.state.cadastro.name = event.target.value;
  this.setState(new CadastroUsuario(this.state.cadastro.name));
}
  render(){
    console.log(this.state.cadastro);
    return (
    
      <>
  
                  <div className="container">
                      <img src={logopitang} alt="LogoPitang"></img>
                    <form className="combo">
                    <p><strong>SIGN UP</strong></p>
                      <div className="form-group">
                        <label>Name</label>
                        <input onChange={this.setCadastroUser} value={this.state.cadastro.name} type="text" className="form-control" ></input>
                      </div>
                      <div className="form-group">
                        <label >Username</label>
                        <input type="text" className="form-control" ></input>
                      </div>
                      <div className="form-group">
                        <label >Email</label>
                        <input  onChange={this.setCadastroUser} value={this.state.cadastro.email} type="email" className="form-control" ></input>
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" ></input>
                      </div>
                      <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="password" className="form-control" ></input>
                      </div>
                      <div>
                           <div className="form-check">
                                   <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                   <label className="form-check-label" hmlfor="exampleCheck1">Accept Terms of Service</label>
                           </div>
                      </div>
                      <button className="btnSI" type="submit" >SIGN UP</button>
                    </form>
                     
                  </div>
              </>
    );
  }
  
}

export default CadastroUsuario;
