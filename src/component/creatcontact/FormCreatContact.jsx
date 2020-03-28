import React , { Component } from 'react';
import axios from 'axios';
import '../../assets/style/FormCreatContact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';



class FormCreatContact extends Component  {

   constructor() {
      super();
       this.state = {
        name:'',
        idUserContact:''
       }
     }

   setName = event => {
      //event.preventDefault();
      this.state.name = event.target.value;
      this.setState({name: this.state.name});
      console.log('name of addcontact : = '+this.state.name)
      }
   setIdContact = event => {
      this.state.idUserContact = event.target.value;
      this.setState({idUserContact: this.state.idUserContact});
      console.log('idUserContact of addcontact : = '+this.state.idUserContact)
   }
   

   sendNewContact = event =>{
      event.preventDefault();
      axios.post('http://localhost:8080/user/1/contact', {
         name:this.state.name,
         idUserContact:this.state.idUserContact
      },{
         headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionStorage.getItem('auth-token')}`
          }
      } )
      .then(function (response) {
        console.log(response);
       
      })
      .catch(function (response) {
        console.log(response.message);
      });
   }

    render(){
        console.log(this.props);
        return(
            <>
               <div className="divtreemenu">
                  <div className="col menu-register-contact">
                      <div className="div-icon-addcontact"><FontAwesomeIcon  icon={faArrowLeft} onClick={()=>this.props.setRenderAddContact()} className="icon-back-contact"/></div>
                      <div className="title-card-add-contact"><b>Add contact</b></div>
                  </div>
                  <div className="div-register-contact">
                    <form onSubmit={this.sendNewContact}>
                       <div className="form-group">
                          <label>Name</label>
                          <input onChange={this.setName} value={this.state.name} type="text" className=" rounded-0 form-control" ></input>
                       </div>
                       <div className="form-group">
                          <label>ID contato</label>
                          <input onChange={this.setIdContact} value={this.state.idUserContact} type="text" className=" rounded-0 form-control" ></input>
                       </div>
                       <button className="btn-si" type="submit">SEND</button>
                    </form>
                  </div>
               </div>
               
            
            </>
        )
    }

}
export default FormCreatContact;