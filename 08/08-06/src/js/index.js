import React from 'react';
import ReactDOM from 'react-dom';
import ComponentHeder from './components/header';
import ComponentFooter from './components/footer';
import BodyIndex from './components/bodyindex';

class Index extends React.Component{
  componentWillMount() { // 页面将要加载的时候
    // 定义你的逻辑即可
    console.log('Index - componentWillMount');
  }
  componentDidMount() {
    console.log('Index - componentDidMount');
  }
  render() {
    var component = <ComponentHeder/>; // 参数形式
    /*
    if (用户已登录) {
      component = <ComponentLoginHeder/>;
    } else{
      component = <ComponentHeder/>;
    }*/
    return (
      <div>
        {component} {/*<ComponentHeder/>*/}
        {/* <BodyIndex userid={123456} username={"nick"}/> */}
        <BodyIndex userid={123456} />
        <ComponentFooter/>
      </div>
    )
  }
}

ReactDOM.render(
  <Index/>,
  document.getElementById('example')
);
