import React from 'react';

export default class BodyIndex extends React.Component{
  componentWillMount() { // 页面将要加载的时候
    // 定义你的逻辑即可
    console.log('BdoyIndex - componentWillMount');
  }
  componentDidMount() {
    console.log('BodyIndex - componentDidMount');
  }
  render() {
    var userName = 'Parry';
    var boolInput = true;
    var htmlText = 'IMOOC&nbsp;LESSON'; // 解析HTML方法一：(Unicode转码)IMOOC\u0020LESSON
    return (
      <div>
        <h2>页面的主体内容</h2>
        <p>{userName == '' ? '用户还没有登录' : '用户名: ' + userName}</p>  {/*三元表达式*/}
        <p><input type='button' value='默认按钮' disabled={boolInput}/></p> {/*动态值绑定*/}
        {/*这里是注释*/}
        <p>{htmlText}</p>  {/*需要进行 Unicode 转码*/}
        <p dangerouslySetInnerHTML={{__html: htmlText}}></p> {/*解析HTML方法二*/}
      </div>
    )
  }
}
