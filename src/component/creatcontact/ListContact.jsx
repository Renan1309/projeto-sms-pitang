import React , { Component } from 'react';
import '../../assets/style/ListContact.css';
import Addcontact from './AddContact.jsx';
import ContactArea from './ContactArea.jsx';



class Listcontact extends Component  {

    render(){
        return(
            <>
                <Addcontact renderAddContact = {this.props.renderAddContact} />
                <div className="listcontact">
                   <ContactArea/>     
                </div>
            
            </>
        )
    }

}
export default Listcontact;