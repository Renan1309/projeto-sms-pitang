import React , {Component}  from 'react';
import ContactArea from './ContactArea.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes} from '@fortawesome/free-solid-svg-icons';


class CardSearchAddContact extends Component  {

    render(){

        return(
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
                <input className= "search-contact-input" type="text" id="fname" name="fname" placeholder="Search for e-mail or username"></input>
            </div>
            <div className ="list-area-contact">
               <ContactArea/>
            </div>
            <div className="div-buttom">
               <button onClick={()=>this.props.setRenderAddContact()} type="button" className="btn-addcontact" >Add</button>
            </div>
        </div>
        )

   

    }

}
export default CardSearchAddContact;