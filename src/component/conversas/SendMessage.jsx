import React , { Component } from 'react';
import axios from 'axios';
import '../../assets/style/SendMessage.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import WindowsDeleteMessage from './WindowsDeleteMessage';



const MessageList = props => {
    console.log(props);
  const listmessages = props.posts.map((message)=>{
      return(
      
        <div className="box-message-main">
            <div className="boxmessage">
           {message.contentmsg}
           
            <div><small> 18:00</small></div>
           {/*<div><small> {message.datareturn}</small></div>*/ }
        </div>
        <button  onClick={( )=>props.renderWinDeleteMsg(message)} className="btn-delete-msg">
             <i className="fas fa-chevron-down   icon-btn-ex-msg"></i>
        </button>
           
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
        renderWinDeleteMsg  : false,
        msgForDelete: '',
        
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

  
  renderWinDeleteMsg = message =>{
      this.setState({msgForDelete: message});
      this.setState({renderWinDeleteMsg:true});
  }
  closeWindDeleteMsg = ()=>{
    this.setState({renderWinDeleteMsg:false});
  }

  sendMessage = event => {
    this.state.message = event.target.value;
    this.setState({message: this.state.message});
    this.setState({idcontact: this.props.contact.idUserContact});
  }

 

    render(){
      console.log(this.props);
      return (
      <>
            <div className="bg-ligth w-100 h-100">
              <div className="objectmessage" >
                 
                <MessageList posts = {this.props.posts} renderWinDeleteMsg={this.renderWinDeleteMsg} />
               
              </div>
              <div className="col combomessage d-flex">
                 <input onChange= {this.sendMessage} value={this.state.message} type="text" className="inputmessage" />
                 <button onClick={this.handleMessage} className="btn-style-send"><FontAwesomeIcon icon={faPaperPlane} /></button>
              </div>
               
           </div>
           {this.state.renderWinDeleteMsg ? <WindowsDeleteMessage message={this.state.msgForDelete} closeWindDeleteMsg={this.closeWindDeleteMsg} /> : <></> } 
          </>
      );

    }
  
  }

export default SendMessage ;