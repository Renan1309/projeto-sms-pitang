import React , { Component } from 'react';
import '../conversas/ListaConversas.css'
import Listconversas from './ListConversas';
import NavBar from './NavBar';
import NavBarMesage from './NavBarMensage';
import './NavBarStyle.css'




class HomeSms extends Component  {


    render(){
      return (
        <>
        <div className="navbarcenter">
        <NavBar/>
        <NavBarMesage/>
        </div>
        
        <div>
        
       
        <Listconversas/>
        </div>
         
        </>
       
      );

    }
  
  }

export default HomeSms;