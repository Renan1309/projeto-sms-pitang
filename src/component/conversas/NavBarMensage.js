import React , { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'




class NavBarMesage extends Component  {
  
    render(){
      return (
        <>
          <div className="navbar nav-bar-mesage col">
             <b>{this.props.namecontact}</b>
             <div className="col px-0"></div>
             <FontAwesomeIcon icon={faEllipsisV} />
         </div>
        </>
       
      );

    }
  
  }

export default NavBarMesage;