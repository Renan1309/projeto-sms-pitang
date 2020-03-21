import React ,{Component} from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import './App.css';
import { createBrowserHistory } from 'history';
import HomeSms from './component/conversas/HomeSms'
import Login from './component/login/HomePage'
const history = createBrowserHistory();









function AppRouter() {
  return (
      <Router history={history}>
          <Switch>
              <Route path={'/'}>
                 <HomeSms/>
              
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
            <AppRouter />
            </>
        </div>

   );
  }
 
}

export default App;
