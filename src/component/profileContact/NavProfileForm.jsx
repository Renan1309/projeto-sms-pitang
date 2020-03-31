import React , { Component } from 'react';
import '../../assets/style/ProfileContact.css';
import {Link} from 'react-router-dom';





class NavProfileForm extends Component  {

    render(){
        return(
            <>
              
                <div className="nav-prof-form">
                  <Link to='/main' >
                     <i class="fas fa-arrow-left  back-signin"></i>   
                  </Link>
                </div>
            
            </>
        )
    }

}
export default NavProfileForm;