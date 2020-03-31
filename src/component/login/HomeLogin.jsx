import React , { Component } from 'react';
import axios from 'axios';
import '../../assets/style/CardLoginRegister.css';
import Login from './Login.jsx';
import {Redirect} from 'react-router-dom';




class HomeLogin extends Component{
 
     constructor() {
        super();
           this.state = {
            registerUser: true,
            redirect: false
         };         
      }
  
    envialogin = login =>{
       console.log("login q veio => ");
       console.log(login);
         //history.push("/cadastro");
         //realizando requisicao =>
        let context = this;
    axios.post('http://localhost:8080/autentica', {
         email: login.email,
         password: login.password
      } )
      .then(function (response) {
        console.log(response);
        console.log(response.data);
        sessionStorage.setItem('auth-token', response.data.token);
        
        axios.get(`http://localhost:8080/user/id`,{
        headers:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionStorage.getItem('auth-token')}`
        }
       }
         ).then(function (response) {
          console.log(response.data);
            sessionStorage.setItem('iduser', response.data.id);
            context.setState({redirect:true})
         })
          .catch(function (error) {
         console.log(error);
         })

        
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
                     {this.state.redirect ? <Redirect to={'/main'} /> : <></>}
                   </div>
                </section>   
            </div>
        </>
       
    );

}

}
export default HomeLogin;