import React, { Component } from 'react';

import './LoginStyle.css'
import cadastroUser from '../Cadastro'
import axios from 'axios';
import { render } from '@testing-library/react';


class Register extends Component {
  //let cadastro = new cadastroUser();
  //console.log(cadastro);
  constructor() {
    super();
   // this.state = new cadastroUser();
    this.state = {
        cadastro  : new cadastroUser(),
    }
}


fillField(prop) {
  return (event) => {
    this.state.cadastro[prop] = event.target.value;
    this.setState(new Register(this.state.cadastro[prop]));
  };
}

handlerSubmitUser = event =>{
  ///creatuser
  event.preventDefault();
  console.log("enviando usuario a ser cadastrado");
  axios.post('http://localhost:8080/creatuser', {
     name: this.state.cadastro.name,
     surname : this.state.cadastro.surname,
     foneId :this.state.cadastro.foneId,
     email :this.state.cadastro.email,
     password :this.state.cadastro.password,
     status :this.state.cadastro.status
      } )
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
      this.setState({cadastro:new cadastroUser()})
}

  render(){
    console.log(this.state.cadastro);
    return (
    
      <>
  
                
                
                    <form onSubmit={this.handlerSubmitUser}>
                    <p className="combo-tite"><strong>SIGN UP</strong></p>
                      <div className="form-group">
                        <label>Name</label>
                        <input onChange={this.fillField('name')} value={this.state.cadastro.name} type="text" className=" rounded-0 form-control" ></input>
                      </div>
                      <div className="form-group">
                        <label >Username</label>
                        <input onChange={this.fillField('surname')} type="text" className="form-control" ></input>
                      </div>
                      <div className="form-group">
                        <label >Email</label>
                        <input  onChange={this.fillField('email')} value={this.state.cadastro.email} type="email" className="rounded-0  form-control" ></input>
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <input onChange={this.fillField('password')} type="password" className=" rounded-0  form-control" ></input>
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
                      <button className="btn-si" type="submit" >SIGN UP</button>
                    </form>
                     
              
              </>
    );
  }
  
}

export default Register;
