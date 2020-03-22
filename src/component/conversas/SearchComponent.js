import React , { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { se} from '@fortawesome/free-solid-svg-icons';
import  '../../assets/style/SearchStyle.css';





class SearchComponent extends Component  {
  
    render(){
      return (
            <div className="searchcolor">
              <input className=" btn-search" type="email" id="email" placeholder=" Search a message "></input>
           </div>
      );

    }
  
  }

export default SearchComponent;