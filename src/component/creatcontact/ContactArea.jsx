import React , { Component } from 'react';
import axios from 'axios';
import fcontact from '../../services/ServiceListeContact'
import '../../assets/style/ListContact.css';



class ContactArea extends Component  {

  constructor() {
    super();
     this.state = {
      listcontactuser: [ ]
     }
   }

   
  componentDidMount(){
    axios.get('http://localhost:8080/contact/1',{
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem('auth-token')}`
      }
    }
    ).then(function (response) {
      this.setState({listcontactuser : response.data});
      console.log(this.state.listcontactuser);
     console.log(response.data);
    }.bind(this))
    .catch(function (error) {
      console.log(error);
    })
  }

  deleteContact = Idcontact =>{
    axios.delete(`http://localhost:8080/contact/user/1/contact/${Idcontact}`,{
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem('auth-token')}`
      }
    }
    ).then(function (response) {
      console.log(response);
    }.bind(this))
    .catch(function (error) {
      console.log(error);
    })
  }

  render(){
      return(
        
          <>
          {this.state.listcontactuser.map((contact)=>{
            return(
              <div className="contactcombo">
              <div className="imgchat"></div>
              <div className ="col">
                 <div d-block>
                    <b className="namecontact">{contact.name}</b>
                </div>
               <div>
               
               </div>    
             </div>
             <div className="div-btn-contact">
                <div className="btn-contact-area">
                     <button  onClick={( )=>this.deleteContact(contact.idUserContact)}>
                        <i class="fas fa-trash-alt"></i>
                     </button>   
                </div>
                <div className="btn-contact-area">
                     <button>
                        <i class="fas fa-edit"></i>
                     </button>
                </div>
                <div className="btn-contact-area">
                     <button>
                      <i class="far fa-share-square"></i>
                    </button>
                </div>
             </div>
             
             
          </div>
            )
              
          })}
           

          </>
      )
  }
}
export default ContactArea;


