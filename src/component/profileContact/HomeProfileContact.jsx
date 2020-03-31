import React , { Component } from 'react';
import NavProfileForm from './NavProfileForm';
import FormProfileContact from './FormProfileContact';





class HomeProfileContact extends Component  {

    render(){
        return(
            <>
              
                <div className="chatbody">
                   <NavProfileForm/>
                   <FormProfileContact/>
                </div>
            
            </>
        )
    }

}
export default HomeProfileContact;