import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import App from './components/App';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Home from './components/Home';
import 'style-loader!css-loader!bulma/css/bulma.css';

ReactDOM.render((
    <Router history={browserHistory} >
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="page1" components={Page1} />
        <Route path="page2" components={Page2} />
      </Route>
    </Router>
), document.getElementById('root'));
