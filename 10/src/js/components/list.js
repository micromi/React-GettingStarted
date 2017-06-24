import React from 'react';
import { Route } from 'react-router-dom';
import ComponentDetails from './details'; // 嵌套的路由

export default class ComponentList extends React.Component{
  render() {
    return (
      <div>
        <h2>这里是list到页面</h2>
        <Route path={`${this.props.match.url}/details/:id`} component={ComponentDetails}></Route>
      </div>
    );
  };
}
