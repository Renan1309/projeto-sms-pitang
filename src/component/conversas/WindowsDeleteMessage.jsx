import React , { Component } from 'react';
import axios from 'axios';
import '../../assets/style/WindowsDeleteMessage.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane} from '@fortawesome/free-solid-svg-icons';




class WindowsDeleteMessage  extends Component  {
  
    constructor() {
      super();
      this.state = {
        
      }
  }
  deleteMessageIndividual = message => {
      console.log(message);
    axios.put(`http://localhost:8080/message/user/${sessionStorage.getItem('iduser')}`, {
        id: message.id,
        contentmsg:message.contentmsg,
        idusermsg: message.idusermsg,
        idusercontact: message.idusercontact,
        statusSend: message.statusSend,
        statusRecipient: message.statusRecipient,
        

       },{
        headers:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionStorage.getItem('auth-token')}`
        }
       } )
       .then(function (response) {
         console.log(response.data);
         this.props.closeWindDeleteMsg()
       }.bind(this))
       .catch(function (error) {
         console.log(error);
       });
  }
  
  deleteMessageGeneral = message => {
    
    console.log(message);
       axios.put(`http://localhost:8080/message/delete/${sessionStorage.getItem('iduser')}`, {
      id: message.id,
      contentmsg:message.contentmsg,
      idusermsg: message.idusermsg,
      idusercontact: message.idusercontact,
      statusSend: message.statusSend,
      statusRecipient: message.statusRecipient,
      

     },{
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem('auth-token')}`
      }
     } )
     .then(function (response) {
      
      this.closewin()
       console.log(response.data);
      
     }.bind(this))
     .catch(function (error) {
       console.log(error);
     });
}

   closewin(){
    this.props.closeWindDeleteMsg();
   }
  
      render(){
          let deletemsggeral = <></>
        console.log( this.props);
        if(this.props.message.idusermsg == sessionStorage.getItem('iduser')){
          deletemsggeral = <button onClick={()=>this.deleteMessageIndividual(this.props.message)} className="btns-win-deletemsg">APAGAR PARA TODOS</button>
        }else{
            
        }
        return (
            <>
             <div className="blumask">
                
               <div className="win-delete-msg">
                   
                <div className="title-win-delete">Apagar Mensagem ?</div> 
                 <div className="box-btns-delete">
                   {deletemsggeral} 
                   <button onClick={()=>this.props.closeWindDeleteMsg()} className="btns-win-deletemsg">CANCELAR</button>
                   <button onClick={()=>this.deleteMessageIndividual(this.props.message)} className="btns-win-deletemsg">APAGAR PARA MIM</button>
                 </div>
                 
               </div>
          
               
            </div>
            </>
        );
  
      }
    
    }
  
  export default WindowsDeleteMessage;