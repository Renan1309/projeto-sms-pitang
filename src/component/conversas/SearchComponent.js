import React , { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCommentAlt  , faEllipsisV , faCircleNotch} from '@fortawesome/free-solid-svg-icons';
import  './SearchStyle.css';





class SearchComponent extends Component  {
  
    render(){
      return (
        <>
    {/*<div className= "col-3 navbarmesage">*/}
     
             <div className="col-3 search">

              <input className="btn-search" type="email" id="email" placeholder=" Search a message "></input>
           </div>
        
    
               
         
      
     {/*</div>*/}
        </>
       
      );

    }
  
  }

export default SearchComponent;