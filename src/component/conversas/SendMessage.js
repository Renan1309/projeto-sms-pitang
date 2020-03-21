import React , { Component } from 'react';
import './SendMessage.css'
import logobody from '../../assets/LogoPitangFundo.PNG';


class SendMessage  extends Component  {
  
    render(){
      return (
            <div className="bg-ligth w-100 h-100">
              <div className="objectmessage" ></div>
              <div className="col combomessage">
              <input type="text" className="inputmessage" />
              </div>
               
           </div>
      );

    }
  
  }

export default SendMessage ;