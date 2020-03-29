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
    axios.put('http://localhost:8080/message/user/1', {
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
       })
       .catch(function (error) {
         console.log(error);
       });
  }
  

   
  
      render(){
          let btnteste = <></>
        console.log( this.props);
        if(this.props.message.idusermsg == 1){
            btnteste = <button onClick={()=>this.deleteMessageIndividual(this.props.message)} className="">Delete teste</button>
        }
        return (
            <>
             <div className="blumask">
                
               <div className="win-delete-msg">
                   
                   
                {btnteste}
                 <button onClick={()=>this.props.closeWindDeleteMsg()} className="">close</button>
                 <button onClick={()=>this.deleteMessageIndividual(this.props.message)} className="">Delete MSG</button>
               </div>
          
               
            </div>
            </>
        );
  
      }
    
    }
  
  export default WindowsDeleteMessage;