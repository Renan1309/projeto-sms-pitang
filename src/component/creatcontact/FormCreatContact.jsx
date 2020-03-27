import React , { Component } from 'react';
import '../../assets/style/FormCreatContact.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';



class FormCreatContact extends Component  {

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
                    <form>
                       <div className="form-group">
                          <label>Name</label>
                          <input  type="text" className=" rounded-0 form-control" ></input>
                       </div>
                       <div className="form-group">
                          <label>ID contato</label>
                          <input  type="text" className=" rounded-0 form-control" ></input>
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