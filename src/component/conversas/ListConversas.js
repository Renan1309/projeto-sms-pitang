import React , { Component } from 'react';
import '../conversas/ListaConversas.css';
import axios from 'axios';
import contactimage from '../../assets/contactprot.png';

import NavBarMesage from '../conversas/NavBarMensage';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';





const Conversations = props => {

  

  const listconversations = props.conversations.map((talk)=>{
    
      return(
     
        <div  onClick={()=>props.setClick(talk.contact.name)} className="conversation">
        <div className="imgchat">
              <img className="imgchat" src={contactimage} alt="logouserdefault"></img>
        </div>
        <div className ="col">
            <div d-block>
               <b className="b namecontact">{talk.contact.name}</b>
               <small>{talk.contentMenssage.contentmsg}</small> 
            </div>    
        </div>
        <div className="d-flex justify-content-center">
           <section>
               <small>{talk.contentMenssage.datareturn}</small>
               <div className="iconprops"> 
                  <FontAwesomeIcon icon={faChevronDown} className="iconeditmsg"/>
               </div>
           </section>
        </div>
   </div>

      );
  });
 
  return(
    <>
    {listconversations}
    </>
  )
}




class Listconversas extends Component  {

  constructor() {
    super();
     this.state = {
      conversations: [ ]
     }
   }


  componentDidMount(){
    axios.get('http://localhost:8080/conversas/1',{}
    ).then(function (response) {
      this.setState({conversations:response.data});
      console.log(response.data);
      console.log(this.state.conversations);
    }.bind(this))
    .catch(function (error) {
      console.log(error);
    })
  }

  
  setClick = name =>{
    this.props.getNameContactForNav(name); 
  }

    render(){
      return (
     
        <>
            <div className= "listchat">
           <Conversations  conversations = {this.state.conversations} setClick = {this.setClick}/>
           </div>
        </>
       
      );

    }
  
  }

export default Listconversas;