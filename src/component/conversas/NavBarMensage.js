import React , { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'




class NavBarMesage extends Component  {
  
    render(){
      return (
        <>
    {/*<div className= "col-3 navbarmesage">*/}
     
          <nav className="navbar nav-bar-mesage ">
        
               
                   <FontAwesomeIcon icon={faEllipsisV} />
               
         </nav>
      
     {/*</div>*/}
        </>
       
      );

    }
  
  }

export default NavBarMesage;