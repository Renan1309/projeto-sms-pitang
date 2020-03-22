import React , { Component } from 'react';
import axios from 'axios';
import './SendMessage.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane} from '@fortawesome/free-solid-svg-icons'



const MessageList = props => {
    
  const listmessages = props.posts.map((message)=>{
      return(
        <div className="boxmessage">
          {message.contentmsg}
        <div><small> {message.datareturn}</small></div>
        </div>
      );

  });
  return(
    <>
    {listmessages}
    </>
  )
}


class SendMessage  extends Component  {
  
  constructor() {
    super();
    this.state = {
        message  : '',
        idcontact : ''
    }
}


  handleMessage = event =>{
    event.preventDefault()
    console.log("msg state = "+this.state.message);
    console.log("id contato =>"+this.state.idcontact);
    axios.post('http://localhost:8080/mensage/new', {
      contentmsg: this.state.message,
      idusermsg : 1,
      idusercontact :this.state.idcontact
      
       } )
       .then(function (response) {
         console.log(response.data);
       })
       .catch(function (error) {
         console.log(error);
       });
  }

  sendMessage = event => {
    this.state.message = event.target.value;
    this.setState({message: this.state.message});
    this.setState({idcontact: this.props.contact.idUserContact});
  }

 

    render(){
      console.log(this.props);
      return (
            <div className="bg-ligth w-100 h-100">
              <div className="objectmessage" >
                 
                <MessageList posts = {this.props.posts}/>
                
              </div>
              <div className="col combomessage d-flex">
                 <input onChange= {this.sendMessage} value={this.state.message} type="text" className="inputmessage" />
                 <button onClick={this.handleMessage} className="btn-style-send"><FontAwesomeIcon icon={faPaperPlane} /></button>
              </div>
               
           </div>
      );

    }
  
  }

export default SendMessage ;