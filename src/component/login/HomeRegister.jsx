import React , { Component } from 'react';
import axios from 'axios';
import '../../assets/style/CardLoginRegister.css';
import Register from './Register';




class HomeRegister extends Component{
 
     constructor() {
        super();
           this.state = {
            registerUser:true
         };         
      }

render(){

    return(


        <>
            <div className ="cardMain">
                <section>
                  <div className="main-logo"></div>
                   <div className="main-content">
                     {/*    {this.state.registerUser ? <Register/> : <Login envialogin={this.envialogin}/> }*/ } 
                     <Register/>
                      
                   </div>
                </section>   
            </div>
        </>
       
    );

}

}
export default HomeRegister;