import React , { Component } from 'react';
import '../conversas/ListaConversas.css'
import userdefault from '../conversas/userdefault.png'
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
           <div className = "conversa">
             <tr>
               <td>
                  <img className="img" src={userdefault} alt="logouserdefault"></img>
               </td>
               <td>
                  <h3>lista</h3>
               <p>mensagem aqui </p>
               </td>
             </tr>
           </div>
        </>
       
      );

    }
  
  }

export default Listconversas;