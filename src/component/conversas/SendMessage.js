import React , { Component } from 'react';


class SendMessage  extends Component  {
  
    render(){
      return (
            <div className="bg-success">
                <h1>Message</h1>
                <h1>Message</h1>
                <div className="px-3">
                   <input className=" btn-search" type="email" id="email" placeholder=" Search a message "></input>
                   <button type="button" class="btn btn-primary">Primary</button>
                </div>
               
           
               


           </div>
      );

    }
  
  }

export default SendMessage ;