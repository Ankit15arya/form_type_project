import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
//import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

//import { Provider as AlertProvider } from 'react-alert';
//import AlertTemplate from 'react-alert-template-basic';

import Header from './layout/Header';
import Dashboard from './leads/Dashboard';
//import Alerts from './layout/Alerts';
//import Login from './accounts/Login';
//import Register from './accounts/Register';
//import PrivateRoute from './common/PrivateRoute';

import { Provider } from 'react-redux';
import store from '../store';

class App extends Component {

  render() {
    return (

      <Provider store={store}>
        <fragment>
          <Header />
          <div className="container">
            <Dashboard />
          </div>
        </fragment>
      </Provider>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
