import React , { Component } from 'react';

import axios from 'axios';
import { Switch , Route , Redirect , BrowserRouter , Router} from "react-router-dom";

import '../../assets/style/CardLoginRegister.css';
import Login from './Login.jsx';
import Register from './Register.jsx';





class CardMain extends Component{
 
     constructor() {
        super();
           this.state = {
            registerUser:true
         };         
      }
  
    envialogin = login =>{
       console.log("login q veio => ");
       console.log(login);
         //history.push("/cadastro");
         //realizando requisicao =>
        
    axios.post('http://localhost:8080/autentica', {
         email: login.email,
         password: login.password
      } )
      .then(function (response) {
        console.log(response);
        console.log(response.data);
        sessionStorage.setItem('auth-token', response.data.token);
        
      })
      .catch(function (error) {
        console.log(error);
      });
    }
 

render(){

    return(


        <>
            <div className ="cardMain">
                <section>
                  <div className="main-logo"></div>
                   <div className="main-content">
                     {/*<Login envialogin={this.envialogin}/>  <Register/>  {this.state.registerUser ? <Register/> : <Login envialogin={this.envialogin}/> }*/ } 
                     <HomeRouter/>
                      
                   </div>
                </section>   
            </div>
        </>
       
    );

}

}
export default CardMain;