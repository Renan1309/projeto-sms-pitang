import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter , Switch , Route } from 'react-router-dom';
import CadastroUsuario from './component/CadastroUsuario';
import HomeSms from './component/conversas/HomeSms';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path='/' exact={true} component={App}/>
            <Route path='/login' exact={true} component={App}/>
            <Route path='/cadastro' exact={true} component={CadastroUsuario}/>
            <Route path='/conversas' exact={true} component={HomeSms}/>

        </Switch>
    </BrowserRouter>
    //ReactDOM.render(<App />, document.getElementById('root'));

 , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
