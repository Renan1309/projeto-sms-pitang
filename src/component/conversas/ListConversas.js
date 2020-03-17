import React , { Component } from 'react';
import '../conversas/ListaConversas.css'
import userdefault from '../conversas/perfiluser.png'
import axios from 'axios';




class Listconversas extends Component  {
  componentDidMount(){
    axios.get('http://localhost:8080/conversas/1',{
   
    }
    )
    .then(function (response) {
      console.log(response.data)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }

    render(){
      return (
        <>
        <h1>Bem vindo ao chat</h1>
      
      <div className= "col-6">
        <div className="row">
           <div className="col-2">
              <img className="img" src={userdefault} alt="logouserdefault"></img>
            </div>
            <div class="col">
              <h5>contato</h5>
              <p>Olá amigo !</p>
            </div>
           </div>
      </div>

        

          
        </>
       
      );

    }
  
  }

export default Listconversas;