import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import App from './components/App';
import FakeKhanPage from './components/FakeKhanPage';
import Page2 from './components/Page2';
import Home from './components/Home';
import 'style-loader!css-loader!bulma/css/bulma.css';
import 'style-loader!css-loader!font-awesome/css/font-awesome.css';

ReactDOM.render((
  <Router history={browserHistory} >
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="fake-khan" components={FakeKhanPage} />
      <Route path="page2" components={Page2} />
    </Route>
  </Router>
), document.getElementById('root'));
