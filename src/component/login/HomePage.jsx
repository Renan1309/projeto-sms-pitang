import React , { Component } from 'react';
import LoginComponent from './loginComponent.jsx';
import axios from 'axios';
import { Switch , Route , Redirect} from "react-router-dom";





class HomePage extends Component{

    state = {};         
    
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
        
        <div className="App">
          
           <LoginComponent envialogin = {this.envialogin}/>
        </div>
  
    );

}

}
export default HomePage;
