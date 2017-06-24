import React from 'react';
import ReactDOM from 'react-dom';
import Index from './index';
import ComponentList from './components/list';
import ComponentDetails from './components/details';
import ComponentNews from './components/news';
import ComponentNewsDetails from './components/newsdetails';
// import { Router, Route, hashHistory} from 'react-router';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

export default class Root extends React.Component{
  render() {
    return (
      // 这里替换了之前的 Index ,变成的程序的入口
      <Router>
        <div>
          <ul>
            <li><Link to="/">首页</Link></li>
            <li><Link to="/list">list页</Link></li>
            <li><Link to="/list/details/1">list中details页</Link></li>
            <li><Link to="/news">news页</Link></li>
            <li><Link to="/news/newsdetails">news中details页</Link></li>
          </ul>
          <Switch>
            <Route exact path="/" component={Index}></Route>
            <Route path="/list" component={ComponentList}></Route>
            <Route path="/news" render={() =>
              <ComponentNews>
                <Switch>
                  <Route path="/new" component={ComponentNews} />
                  <Route path="/news/newsdetails"component={ComponentNewsDetails} />
                  <Redirect from="/news/:other" to="/news"/> {/*重定向*/}
                </Switch>
              </ComponentNews>
            }></Route>
          </Switch>
        </div>
      </Router>
    );
  };
};

ReactDOM.render(
  <Root/>,
  document.getElementById('example')
);
