import React , { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { se} from '@fortawesome/free-solid-svg-icons';
import  './SearchStyle.css';





class SearchComponent extends Component  {
  
    render(){
      return (
            <div className="px-1">
              <input className=" btn-search" type="email" id="email" placeholder=" Search a message "></input>
           </div>
      );

    }
  
  }

export default SearchComponent;