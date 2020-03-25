import React , { Component } from 'react';
import '../../assets/style/MenuContact.css';
import NavBar from './NavBar';
import NavBarMesage from './NavBarMensage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes} from '@fortawesome/free-solid-svg-icons';

class ConversationObject extends Component{
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
                        <button className="btn-closecontact"><FontAwesomeIcon icon={faTimes} /></button>
                    </div>
                   
                    
                   
                </div>
            </div>
        </div>
   
      
           
            </>
          )
        
    }
   
  
}export default ConversationObject;