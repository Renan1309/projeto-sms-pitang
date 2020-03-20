import React , { Component } from 'react';
import '../conversas/ListaConversas.css';
import axios from 'axios';
import contactimage from '../../assets/contactprot.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';




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
         <div className= "listchat">


            <div onClick ={this.setClick} className="conversation">
                 <div className="imgchat">
                       <img className="imgchat" src={contactimage} alt="logouserdefault"></img>
                 </div>
                 <div className ="col">
                     <div d-block>
                        <b className="b namecontact">Renan</b>
                        <small>Mensagem</small> 
                     </div>    
                 </div>
                 <div className="d-flex justify-content-center">
                    <section>
                        <small>29-01-2020</small>
                        <div className="iconprops"> <FontAwesomeIcon icon={faChevronDown} className="iconeditmsg"/></div>
                    </section>
                 </div>
            </div>


            <div  onClick ={this.setClick} className="conversation">
                 <div className="imgchat">
                       <img className="imgchat" src={contactimage} alt="logouserdefault"></img>
                 </div>
                 <div className ="col">
                     <div d-block>
                        <b className="b namecontact">Robson</b>
                        <small>Mensagem</small> 
                     </div>    
                 </div>
                 <div className="d-flex justify-content-center">
                    <section>
                        <small>29-01-2020</small>
                        <div className="iconprops"> <FontAwesomeIcon icon={faChevronDown} className="iconeditmsg"/></div>
                    </section>
                 </div>
            </div>


            <div onClick ={this.setClick} className="conversation">
                 <div className="imgchat">
                       <img className="imgchat" src={contactimage} alt="logouserdefault"></img>
                 </div>
                 <div className ="col">
                     <div d-block>
                        <b className="b namecontact">Messi</b>
                        <small>Mensagem</small> 
                     </div>    
                 </div>
                 <div className="d-flex justify-content-center">
                    <section>
                        <small>29-01-2020</small>
                        <div className="iconprops"> <FontAwesomeIcon icon={faChevronDown} className="iconeditmsg"/></div>
                    </section>
                 </div>
            </div>

            <div className="conversation">
                 <div className="imgchat">
                       <img className="imgchat" src={contactimage} alt="logouserdefault"></img>
                 </div>
                 <div className ="col">
                     <div d-block>
                        <b className="b namecontact">Ronaldo</b>
                        <small>Mensagem</small> 
                     </div>    
                 </div>
                 <div className="d-flex justify-content-center">
                    <section>
                        <small>29-01-2020</small>
                        <div className="iconprops"> <FontAwesomeIcon icon={faChevronDown} className="iconeditmsg"/></div>
                    </section>
                 </div>
            </div>

            <div className="conversation">
                 <div className="imgchat">
                       <img className="imgchat" src={contactimage} alt="logouserdefault"></img>
                 </div>
                 <div className ="col">
                     <div d-block>
                        <b className="b namecontact">Renan</b>
                        <small>Mensagem</small> 
                     </div>    
                 </div>
                 <div className="d-flex justify-content-center">
                    <section>
                        <small>29-01-2020</small>
                        <div className="iconprops"> <FontAwesomeIcon icon={faChevronDown} className="iconeditmsg"/></div>
                    </section>
                 </div>
            </div>


            <div className="conversation">
                 <div className="imgchat">
                       <img className="imgchat" src={contactimage} alt="logouserdefault"></img>
                 </div>
                 <div className ="col">
                     <div d-block>
                        <b className="b namecontact">Renan</b>
                        <small>Mensagem</small> 
                     </div>    
                 </div>
                 <div className="d-flex justify-content-center">
                    <section>
                        <small>29-01-2020</small>
                        <div className="iconprops"> <FontAwesomeIcon icon={faChevronDown} className="iconeditmsg"/></div>
                    </section>
                 </div>
            </div>

            <div className="conversation">
                 <div className="imgchat">
                       <img className="imgchat" src={contactimage} alt="logouserdefault"></img>
                 </div>
                 <div className ="col">
                     <div d-block>
                        <b className="b namecontact">Renan</b>
                        <small>Mensagem</small> 
                     </div>    
                 </div>
                 <div className="d-flex justify-content-center">
                    <section>
                        <small>29-01-2020</small>
                        <div className="iconprops"> <FontAwesomeIcon icon={faChevronDown} className="iconeditmsg"/></div>
                    </section>
                 </div>
            </div>

            <div className="conversation">
                 <div className="imgchat">
                       <img className="imgchat" src={contactimage} alt="logouserdefault"></img>
                 </div>
                 <div className ="col">
                     <div d-block>
                        <b className="b namecontact">Renan</b>
                        <small>Mensagem</small> 
                     </div>    
                 </div>
                 <div className="d-flex justify-content-center">
                    <section>
                        <small>29-01-2020</small>
                        <div className="iconprops"> <FontAwesomeIcon icon={faChevronDown} className="iconeditmsg"/></div>
                    </section>
                 </div>
            </div>

         </div>
        </>
       
      );

    }
  
  }

export default Listconversas;