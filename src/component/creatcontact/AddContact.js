import React , { Component } from 'react';
import '../../assets/style/ListContact.css';



class Addcontact extends Component  {

    render(){
        return(
            <>
           <div className= "bg-dark">
                    <div className="addcontactcombo">
                          <div className="imgaddcontact ">
                          </div>
                          <div className ="col">
                              <div d-block>
                                <b className="namecontact">Adicionar novo contato</b>
                              </div>    
                          </div>
                   </div>
              </div>
            </>
        )
    }

}
export default Addcontact;