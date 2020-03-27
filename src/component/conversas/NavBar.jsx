import React , { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCommentAlt  , faEllipsisV , faCircleNotch , faUser , faQuestionCircle , faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import  '../../assets/style/NavBarStyle.css';
import  '../../assets/style/MenuConfig.css';
import userdefault from '../../assets/images/userorange.png';
import { Link } from 'react-router-dom';



class NavBar extends Component  {

  constructor() {
    super();
   // this.state = new LoginState();
    this.state = {
       menuoption : false
    }
}

  setViewMenuOption(){
    if(this.state.menuoption == false){
      this.setState({menuoption: true});
    }
    else{
      this.setState({menuoption: false});
    }
    
  }
    render(){
      let comboMenuOption = <></>;
      if (this.state.menuoption) {
        comboMenuOption = ( <ul className="menu-dropdown">
        <li className="menu-option"><div></div>Profile <FontAwesomeIcon icon={faUser} className="iconawesome"  /></li> 
        <li className="menu-option">Help <FontAwesomeIcon icon={faQuestionCircle} className="iconawesome"  /></li>
        <li className="menu-option"> Sign Out <i className="faEllipsisV"></i></li>
      </ul>
        )
        

      }
      return (
        <>
          {/*<div className= "col-3 teste">*/}
     
          <nav onClick={()=>this.props.renderListcontact()} className="col-4 navbar nav-bar-menu navbar-light">
          <img className="img" src={userdefault} alt="logouserdefault"></img>
            
                <div className="tef"> 
                   <Link to='/login'>
                      <svg  className="iconstory" id="df9d3429-f0ef-48b5-b5eb-f9d27b2deba6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12.072 1.761a10.05 10.05 0 0 0-9.303 5.65.977.977 0 0 0 1.756.855 8.098 8.098 0 0 1 7.496-4.553.977.977 0 1 0 .051-1.952zM1.926 13.64a10.052 10.052 0 0 0 7.461 7.925.977.977 0 0 0 .471-1.895 8.097 8.097 0 0 1-6.012-6.386.977.977 0 0 0-1.92.356zm13.729 7.454a10.053 10.053 0 0 0 6.201-8.946.976.976 0 1 0-1.951-.081v.014a8.097 8.097 0 0 1-4.997 7.209.977.977 0 0 0 .727 1.813l.02-.009z"></path><path fill="#ffc801" d="M19 1.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"></path></svg>
                   </Link>
                      {/*<FontAwesomeIcon icon={faCircleNotch} className="iconawesome "/>*/}
                   <Link to='/cadastro'>
                      <FontAwesomeIcon icon={faCommentAlt} className="iconawesome " />
                   </Link>
                   
                   <FontAwesomeIcon icon={faEllipsisV} onClick={()=>this.setViewMenuOption()} className="iconawesome menu"  />

                   
                     {comboMenuOption}
                        
               
                </div>
                          
             
         </nav>
        
      {/* </div>*/}
        </>
       
      );

    }
  
  }

export default NavBar;