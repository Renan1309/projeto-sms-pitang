import React , { Component } from 'react';
import '../../assets/style/MenuContact.css';
import NavBar from '../conversas/NavBar';
import NavBarMesage from '../conversas/NavBarMensage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes} from '@fortawesome/free-solid-svg-icons';
import ContactArea from './ContactArea';

class WindowsAddContact extends Component{
//Componente que tava sendo usado para testar a propriedade : backdrop-filter: blur(5px);

    render(){
        return(
            <>
      
     
        <div className="blumask">
            <div className="divtreemenu">
                <div className="header-add-contato">
                    <div className="div-item-red"></div>
                    <div className="div-context-contact col">
                        <div className="col titulo-contact">
                            <b>Novo Contato</b>
                          
                        </div>
                        <button onClick={this.props.renderAddContact} className="btn-closecontact"><FontAwesomeIcon icon={faTimes} /></button>
                    </div>  
                </div>
                <div className="search-addcontact">
                    <input className= "search-contact-input" type="text" id="fname" name="fname"></input>
                </div>
                <div className ="list-area-contact">
                   <ContactArea/>
                </div>
                <div className="div-buttom">
                   <button type="button" className="btn-addcontact" >Add</button>
                </div>
            </div>
        </div>
   
      
           
            </>
          )
        
    }
   
  
}export default WindowsAddContact;