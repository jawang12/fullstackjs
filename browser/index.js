import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import Example from './containers/ExampleContainer';
import { hello } from './reducers/example';

const loadData = () => {
  store.dispatch(hello('Hello World :)'));
};

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path="/" onEnter={ loadData }>
        <Route path="/home" component={ Example }/>
        <IndexRedirect to="/home"/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
