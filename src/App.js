import React ,{Component} from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import './App.css';
import { createBrowserHistory } from 'history';
import HomeSms from './component/conversas/HomeSms.jsx'
import LoginRouter from './component/Routes/Routes.jsx';
import Routes from './component/Routes/Routes.jsx';

const history = createBrowserHistory();


function AppRouter() {
  return (
      <Router history={history}>
          <Switch>
              <Route path={'/'}>
             
              <HomeSms/>
               {/**<HomeSms/><Login/>  <ConversationObject/>*/} 
              </Route>
          </Switch>
      </Router>
  );
}

class  App extends Component {
  render(){
    return (

        <div className="app">
          <>
           < Routes/>
            </>
        </div>

   );
  }
 
}

export default App;
