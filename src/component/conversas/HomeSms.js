import React , { Component } from 'react';
import Listconversas from './ListConversas';
import NavBar from './NavBar';
import NavBarMesage from './NavBarMensage';
import '../../assets/style/NavBarStyle.css';
import  SearchComponent from './SearchComponent';
import '../../assets/style/Chat.css';
import SendMessage from './SendMessage';
import axios from 'axios';
import Listcontact from '../creatcontact/ListContact';
import WindowsAddContact from '../creatcontact/WindowsAddContact';



class HomeSms extends Component  {

  constructor() {
    super();
     this.state = {
      contact: '',
      posts: [ ],
      viewListcontact: false,
      pageAddContact:false
     }
   }

   getNameContactForNav = name => {
     this.setState({namecontact: name})
   }

   getContact = contact => {
       this.setState({contact: contact})
       axios.get(`http://localhost:8080/mensagens/user/1/contact/${contact.idUserContact}/status/true`,{}
         ).then(function (response) {
          console.log(response.data);
          this.setState({posts: response.data});
         }.bind(this))
        .catch(function (error) {
         console.log(error);
         })
     
   }

   renderListcontact =() =>{
    if(this.state.viewListcontact == false){
      this.setState({viewListcontact:true});
    }else{
      this.setState({viewListcontact:false});
    }
   }

   renderAddContact =() =>{
    if(this.state.pageAddContact == false){
      this.setState({pageAddContact:true});
    }else{
      this.setState({pageAddContact:false});
    }
   }

    render(){
      return (
        <>
       
        <div className="chatbody">
  
        <section>
        <div className="w-100 mx-0 row ">
              <NavBar renderListcontact = {this.renderListcontact}/>
              <NavBarMesage namecontact = {this.state.contact.name}/>
              </div>
               <div className="w-100 mx-0 row ">
                   <div className ="col-4  px-0">
                       <SearchComponent/> 
                       {this.state.viewListcontact ? <Listcontact renderAddContact={this.renderAddContact}/> : 
                       <Listconversas getNameContactForNav={this.getNameContactForNav} getContact={this.getContact}/>}
                   </div >
                   <div className="col px-0">
                      <SendMessage contact={this.state.contact}  posts={this.state.posts}/>
                   </div>
               </div> 
              
           </section>

        </div>
        {this.state.pageAddContact ? <WindowsAddContact renderAddContact={this.renderAddContact} /> : <></> } 
        </>
       
      );

    }
  
  }

export default HomeSms;