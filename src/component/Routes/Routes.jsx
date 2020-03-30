import React , {Component} from 'react'
import {BrowserRouter, Switch, Route, Router , Redirect } from 'react-router-dom';
import HomePage from '../login/HomePage.jsx';
import CadastroUsuario from '../CadastroUsuario.jsx';
import HomeSms from '../conversas/HomeSms.jsx';
import FormCreatContact from '../creatcontact/FormCreatContact.jsx';
import CardMain from '../login/CardMain.jsx';

import { createBrowserHistory } from 'history';
import HomeLogin from '../login/HomeLogin.jsx';
import HomeRegister from '../login/HomeRegister.jsx';
const history = createBrowserHistory();



const Routes = () =>(
    

    <BrowserRouter>
    <Switch>
        <Route path="/" exact component={HomeLogin}/>
        <Route path="/sign-in" exact component={HomeLogin}/>
        <Route path="/sign-up" exact component={HomeRegister}/>
        <Route path="/main" exact component={HomeSms}/>
        
    </Switch>

</BrowserRouter>
    
    
);


export default  Routes ;