import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import PCIndex from './components/pc_index';
import PCUserCenter from './components/pc_usercenter';
import MobileIndex from './components/mobile_index';
import 'antd/dist/antd.css';
import MediaQuery from 'react-responsive';

export default class Root extends React.Component{
  render() {
    return (
      <div>
        <MediaQuery query='(min-device-width: 1224px)'>
          <Router>
            <Switch>
              <Route exact path="/" component={PCIndex}></Route>
              <Route path="/usercenter" component={PCUserCenter}></Route>
            </Switch>
          </Router>
        </MediaQuery>
        <MediaQuery query='(max-device-width: 1224px)'>
          <MobileIndex/>
        </MediaQuery>
      </div>
    );
  };
};

ReactDOM.render(
  <Root/>,
  document.getElementById('mainContainer')
);
