import React , { Component } from 'react';
import axios from 'axios';
import '../../assets/style/CardLoginRegister.css';
import Login from './Login.jsx';




class HomeLogin extends Component{
 
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
                     {/*  <Register/>  {this.state.registerUser ? <Register/> : <Login envialogin={this.envialogin}/> }*/ } 
                     <Login envialogin={this.envialogin}/>
                      
                   </div>
                </section>   
            </div>
        </>
       
    );

}

}
export default HomeLogin;