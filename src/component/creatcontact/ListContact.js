import React , { Component } from 'react';
import '../../assets/style/ListContact.css';
import Addcontact from './AddContact';



class Listcontact extends Component  {

    render(){
        return(
            <>
            <Addcontact renderAddContact = {this.props.renderAddContact} />
           <div className= "listcontact bg-dark">
                    <div className="contactcombo">
                          <div className="imgchat">
                          </div>
                          <div className ="col">
                              <div d-block>
                                <b className="namecontact">Messi</b>
                              </div>    
                          </div>
                   </div>


                   <div className="contactcombo">
                          <div className="imgchat">
                          </div>
                          <div className ="col">
                              <div d-block>
                                <b className="namecontact">Ronaldinho</b>
                              </div>    
                          </div>
                   </div>


                   <div className="contactcombo">
                          <div className="imgchat">
                          </div>
                          <div className ="col">
                              <div d-block>
                                <b className="namecontact">Thiago</b>
                              </div>    
                          </div>
                   </div>


                   <div className="contactcombo">
                          <div className="imgchat">
                          </div>
                          <div className ="col">
                              <div d-block>
                                <b className="namecontact">Carlos</b>
                              </div>    
                          </div>
                   </div>



                   <div className="contactcombo">
                          <div className="imgchat">
                          </div>
                          <div className ="col">
                              <div d-block>
                                <b className="namecontact">Miguel</b>
                              </div>    
                          </div>
                   </div>



                   <div className="contactcombo">
                          <div className="imgchat">
                          </div>
                          <div className ="col">
                              <div d-block>
                                <b className="namecontact">Fulano</b>
                              </div>    
                          </div>
                   </div>



                   <div className="contactcombo">
                          <div className="imgchat">
                          </div>
                          <div className ="col">
                              <div d-block>
                                <b className="namecontact">Fulano</b>
                              </div>    
                          </div>
                   </div>



                   <div className="contactcombo">
                          <div className="imgchat">
                          </div>
                          <div className ="col">
                              <div d-block>
                                <b className="namecontact">Fulano</b>
                              </div>    
                          </div>
                   </div>



           </div>
            </>
        )
    }

}
export default Listcontact;