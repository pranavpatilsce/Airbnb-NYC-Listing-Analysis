import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Landing from './landing.js';
import Results from './results/results.js';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class PredictionRoutes extends React.Component {
  render(){
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          {/*<Route exact path="/results" component={Results} />*/}
        </Switch>
      </Router>
    )
  }
}

ReactDOM.render(
  <PredictionRoutes />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
