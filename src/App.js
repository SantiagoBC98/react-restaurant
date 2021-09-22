import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { connect } from 'react-redux';

import { RestList } from './modules/restaurantList/RestList';
import Login from './modules/login/Login';

function App(props) {
	
	return (
		<Router>
      <Switch>
        <Route exact={true} path="/">
          {userInfo == null &&
            <Login />
          }
          {userInfo != null &&
            <Redirect 
              to = {{
                pathname: '/home'
              }}
            />
          }
        </Route>
        <Route path="/home">
          <RestList />
        </Route>
      </Switch>
    </Router>
	);
}

export default connect(
  store => ({
    userInfo: store.login.userInfo,
  }),
  null 
)(App);
