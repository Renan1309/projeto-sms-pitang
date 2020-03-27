import React , { Component } from 'react';
import '../../assets/style/MenuContact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes} from '@fortawesome/free-solid-svg-icons';
import ContactArea from './ContactArea.jsx';

import { Redirect } from 'react-router-dom';
import CadastroUsuario from '../CadastroUsuario.jsx';
import FormCreatContact from './FormCreatContact.jsx';
import CardSearchAddContact from './CardSearchAddContact.jsx';

class WindowsAddContact extends Component{

    constructor() {
       super();
        this.state = {
            goContactRegister: false,

     }
   }
    setRenderAddContact =() =>{
        if(this.state.goContactRegister){
            this.setState({goContactRegister: false});
        }else{
            this.setState({goContactRegister: true})
        }
       
        // this.state.goContactRegister ? this.setState({goContactRegister: false}) : this.setState({goContactRegister: true})
       //this.setState({goContactRegister: true});
     
    }
    setteste =()=>{
        alert("pegou")
        this.setState({goContactRegister: false})
    }
    render(){
        return(
            <>
      
     
        <div className="blumask">
            <CardSearchAddContact renderAddContact ={this.props.renderAddContact}  setRenderAddContact={this.setRenderAddContact}/>
            {this.state.goContactRegister ?<FormCreatContact  setRenderAddContact ={this.setRenderAddContact}/> : <></>}
        </div>
         
          
            </>
          )
        
    }
   
  
}export default WindowsAddContact;