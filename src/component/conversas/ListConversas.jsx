import React , { Component } from 'react';
import '../../assets/style/ListaConversas.css';
import axios from 'axios';
import contactimage from '../../assets/images/contactprot.png';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';





const Conversations = props => {
  
  

  const listconversations = props.conversations.map((talk)=>{
     
      return(
     
        <div  onClick={()=>props.setClick(talk.contact)} className="conversation">
        <div className="imgchat">
              <img className="imgchat" src={contactimage} alt="logouserdefault"></img>
        </div>
        <div className ="col">
            <div d-block>
              {console.log(new Date(talk.datareturn).getTime())}
               <b className="b namecontact">{talk.contact.name}</b>
               <small>{talk.contentMenssage.contentmsg}</small> 
            </div>    
        </div>
        <div className="d-flex justify-content-center">
           <section>
             {/* <small>{talk.contentMenssage.datareturn}</small>*/}
               <small>16:50</small>
               <div onClick={(e)=>props.clicktest(e)} className="iconprops"> 
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
    console.log(sessionStorage.getItem('auth-token'))
    axios.get(`http://localhost:8080/conversas/${sessionStorage.getItem('iduser')}`,{
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem('auth-token')}`
      }
    }
    ).then(function (response) {
      this.setState({conversations:response.data});
      //console.log(response.data);
     // console.log(this.state.conversations);
    }.bind(this))
    .catch(function (error) {
      console.log(error);
    })
  }

  clicktest = event =>{
    event.stopPropagation();
    alert("ola");
  }

  setClick = contact =>{
    this.props.getNameContactForNav(contact.name); 
    this.props.getContact(contact)
  }

    render(){
      return (
     
        <>
            <div className= "listchat">
              <Conversations  conversations = {this.state.conversations} setClick = {this.setClick}   clicktest={this.clicktest}/>
           </div>
        </>
       
      );

    }
  
  }

export default Listconversas;