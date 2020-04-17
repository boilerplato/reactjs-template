import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import './index.css';
import history from '../../history';
import Home from '../../pages/Home';
import NotFound from '../../pages/NotFound';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    };
  }

  componentDidMount() {
    this.setState({
      loaded: true
    });
  }

  render() {
    const { loaded } = this.state;

    return (
      <div className="app">
        {
          loaded
            ? (
              <Router history={history}>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route component={NotFound} />
                </Switch>
              </Router>
            )
            : (
              <div className="loader">
                App is loading..
              </div>
            )
        }
      </div>
    );
  }
}

export default App;
