import React , {Component} from 'react'
import {BrowserRouter, Switch, Route, Router , Redirect } from 'react-router-dom';
import HomePage from '../login/HomePage.jsx';
import CadastroUsuario from '../CadastroUsuario.jsx';
import HomeSms from '../conversas/HomeSms.jsx';
import FormCreatContact from '../creatcontact/FormCreatContact.jsx';
import CardMain from '../login/CardMain.jsx';


const Routes = () =>(
    <BrowserRouter>
        <Switch>
            <Route path="/sign-in" exact component={HomePage}/>
            <Route path="/sign-up" exact component={CadastroUsuario}/>
            <Route path="/main" exact component={HomeSms}/>
            <Route path="/creat-contact" exact component={FormCreatContact}/>
            <Route path="/loginteste" exact component={CardMain}/>
        </Switch>
    
    </BrowserRouter>
);


export default  Routes ;