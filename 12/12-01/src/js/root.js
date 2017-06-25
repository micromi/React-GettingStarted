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
import 'antd/dist/antd.css';

export default class Root extends React.Component{
  render() {
    return (
      <div>
        <PCIndex/>
      </div>
    );
  };
};

ReactDOM.render(
  <Root/>,
  document.getElementById('mainContainer')
);
