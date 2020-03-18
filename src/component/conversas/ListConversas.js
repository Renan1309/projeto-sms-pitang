import React , { Component } from 'react';
import '../conversas/ListaConversas.css'
import userdefault from '../conversas/userdefault.png'
import axios from 'axios';
import contactimage from '../../assets/contactprot.png'




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

  setClick = event =>{
    alert("click na lista")
    console.log("Click na div");
  }
    render(){
      return (
        <>
       
      
      <div className= "col-3 testex">
        
            <div onClick ={this.setClick} className="row">
               <div className="col-2">
                  <img className="img" src={contactimage} alt="logouserdefault"></img>
                </div>
                <div className="col">
                  <h5>Renan</h5>
                  <p>Olá amigo !</p>
                </div>
              </div>
    
               <div className="row">
                 <div className="col-2">
                 <img className="img" src={contactimage} alt="logouserdefault"></img>
                  </div>
                  <div className="col">
                    <h5>Robson</h5>
                    <p>Fala cara !</p>
                  </div>
               </div>
    
               <div className="row">
                  <div className="col-2">
                  <img className="img" src={contactimage} alt="logouserdefault"></img>
                   </div>
                   <div className="col">
                     <h5>Messi</h5>
                     <p>Como esta o projeto ?</p>
                   </div>
               </div>

               <div className="row">
                  <div className="col-2">
                  <img className="img" src={contactimage} alt="logouserdefault"></img>
                   </div>
                   <div className="col">
                     <h5>Messi</h5>
                     <p>Como esta o projeto ?</p>
                   </div>
               </div>

               <div className="row">
                  <div className="col-2">
                  <img className="img" src={contactimage} alt="logouserdefault"></img>
                   </div>
                   <div className="col">
                     <h5>Messi</h5>
                     <p>Como esta o projeto ?</p>
                   </div>
               </div>

               <div className="row">
                  <div className="col-2">
                  <img className="img" src={contactimage} alt="logouserdefault"></img>
                   </div>
                   <div className="col">
                     <h5>Messi</h5>
                     <p>Como esta o projeto ?</p>
                   </div>
               </div>

               <div className="row">
                  <div className="col-2">
                  <img className="img" src={contactimage} alt="logouserdefault"></img>
                   </div>
                   <div className="col">
                     <h5>Messi</h5>
                     <p>Como esta o projeto ?</p>
                   </div>
               </div>

               <div className="row">
                  <div className="col-2">
                  <img className="img" src={contactimage} alt="logouserdefault"></img>
                   </div>
                   <div className="col">
                     <h5>Messi</h5>
                     <p>Como esta o projeto ?</p>
                   </div>
               </div>

               <div className="row">
                  <div className="col-2">
                  <img className="img" src={contactimage} alt="logouserdefault"></img>
                   </div>
                   <div className="col">
                     <h5>Messi</h5>
                     <p>Como esta o projeto ?</p>
                   </div>
               </div>
               
              
              
         
      
               
          </div>

       

          
        </>
       
      );

    }
  
  }

export default Listconversas;