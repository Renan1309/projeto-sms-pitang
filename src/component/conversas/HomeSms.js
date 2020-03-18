import React , { Component } from 'react';
import '../conversas/ListaConversas.css'
import Listconversas from './ListConversas';
import NavBar from './NavBar';
import NavBarMesage from './NavBarMensage';
import './NavBarStyle.css'
import  SearchComponent from './SearchComponent'




class HomeSms extends Component  {


    render(){
      return (
        <>
        <div className="chatprincipal">
           <div className="navbarcenter">
               <NavBar/>
               <NavBarMesage/>
           </div>
           <div> 
              <SearchComponent/>
              <Listconversas/>
           </div>
        </div>
       
        </>
       
      );

    }
  
  }

export default HomeSms;