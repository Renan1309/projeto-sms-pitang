import React , { Component } from 'react';
import Listconversas from './ListConversas';
import NavBar from './NavBar';
import NavBarMesage from './NavBarMensage';
import './NavBarStyle.css'
import  SearchComponent from './SearchComponent'
import './Chat.css'
import SendMessage from './SendMessage';





class HomeSms extends Component  {


    render(){
      return (
        <>
       
        <div className="chatbody">
        <section>
              <div className="w-100 mx-0 row ">
                 <NavBar/>
                 <NavBarMesage/>
              </div>
               <div className="w-100 mx-0 row ">
                 <div className ="col-4  px-0">
                       <SearchComponent/>
                        <Listconversas/>
                  </div >
                  <div className="col px-0">
                  <SendMessage/>
                  </div>
                  
               </div>
                 
              
           </section>
        </div>
        
        </>
       
      );

    }
  
  }

export default HomeSms;