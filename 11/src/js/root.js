import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import {Button} from 'antd';
import 'antd/dist/antd.css';

export default class Root extends React.Component{
  render() {
    return (
      <div>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="ghost">Ghost</Button>
        <Button type="dashed">Dashed</Button>
      </div>
    );
  };
};

ReactDOM.render(
  <Root/>,
  document.getElementById('mainContainer')
);
