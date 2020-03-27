import React , { Component } from 'react';

import axios from 'axios';
import { Switch , Route , Redirect} from "react-router-dom";

import '../../assets/style/CardLoginRegister.css';
import Login from './Login.jsx';
import Register from './Register.jsx';




class CardMain extends Component{

    state = {

    };         
    
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
        console.log(response.data);
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
                     {/*<Login envialogin={this.envialogin}/>  <Register/>*/ } 
                     <Login envialogin={this.envialogin}/>
                   </div>
                </section>   
            </div>
        </>
       
    );

}

}
export default CardMain;