import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import configureStore from './configureStore';
import { loadFromCdn } from './load_from_cdn';
import { createHistory } from 'history'
import { syncReduxAndRouter } from 'redux-simple-router'
import { IndexRedirect, IndexRoute, Route, Router } from 'react-router';
import App from './routes/app';
import Dashboard from './routes/dashboard/dashboard';
import { Controls } from './routes/dashboard/controls';
import { Devices } from './routes/dashboard/devices';
import { Sequences } from './routes/dashboard/sequences/sequences';
import { Regimens } from './routes/dashboard/regimens/regimen_builder';
import { Schedules } from './routes/dashboard/schedules/schedules';
import { FarmDesigner } from './routes/dashboard/farm_designer/farm_designer';
import { Login } from './routes/login';
import { CONFIG } from './config';
import { connect } from 'react-redux';

const store = configureStore();
const history = createHistory();

syncReduxAndRouter(history, store);

var wrap = function(Component, props) {
  return React.createClass({
    render: function() {
      return React.createElement(Component, props);
    }
  });
};

class Root extends Component {
  requireAuth(){
    console.log("REQUIRING AUTH, CAP'N!! ")
  }

  render() {
    return (
      <div>
        <Provider store={store}>
          <Router history={history}>
            <Route path={CONFIG.ROOT_PATH || "/"} component={App}>
              <Route path="login" component={Login}/>
              <Route path="dashboard" component={ Dashboard } onEnter={ this.requireAuth.bind(this) }>
                <Route path="designer" component={ wrap(FarmDesigner, this.props) }/>
                <Route path="controls" component={ wrap(Controls, this.props) }/>
                <Route path="devices" component={ wrap(Devices, this.props) }/>
                <Route path="sequences" component={ wrap(Sequences, this.props) }/>
                <Route path="regimens" component={ wrap(Regimens, this.props) }/>
                <Route path="schedules" component={ wrap(Schedules, this.props) } />
                <IndexRoute component={wrap(Controls, this.props)}/>
              </Route>
              <IndexRedirect to="dashboard"/>
            </Route>
          </Router>
        </Provider>
        <DebugPanel top right bottom>
          <DevTools store={store} monitor={LogMonitor} visibleOnLoad={false} />
        </DebugPanel>
      </div>
    );
  }
}

var ConnectedRoot = connect(state => state)(Root);
ReactDOM.render(<ConnectedRoot store={ store } />,
                document.getElementById('root'));

// Bootstrap.js doesn't use ES6 modules yet. Need to globally export.
// Know a more ES6 compliant way to do this? Submit a PR!
import $ from 'jquery';
window.$ = $;
window.jQuery = $;

require("!style!css!sass!./css/toastr.scss");
require("!style!css!sass!./css/alerts.scss");
require("!style!css!sass!./css/auth.scss");
require("!style!css!sass!./css/blocks.scss");
require("!style!css!sass!./css/buttons.scss");
require("!style!css!sass!./css/calendar.scss");
require("!style!css!sass!./css/farm_designer.scss");
require("!style!css!sass!./css/farm_designer_mobile.scss");
require("!style!css!sass!./css/farmbot.scss");
require("!style!css!sass!./css/inputs.scss");
require("!style!css!sass!./css/farm_designer_panels.scss");
require("!style!css!sass!./css/map.scss");
require("!style!css!sass!./css/navbar.scss");
require("!style!css!sass!./css/search.scss");
require("!style!css!sass!./css/tables.scss");
require("!style!css!sass!./css/tooltips.scss");
require("!style!css!sass!./css/widgets.scss");
require("!style!css!sass!./css/widget_move.scss");
require("!style!css!sass!./css/widget_tool_control.scss");

loadFromCdn(
  "//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css",
  "css");
loadFromCdn(
  "//maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css",
  "css");
loadFromCdn(
  "//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js",
  "js");

