import React from 'react';
import PropTypes from 'prop-types'; // (propTypes类型检查)React.PropTypes自React v15.5起已弃用。使用该prop-types库替代
import BodyChild from './bodychild';

export default class BodyIndex extends React.Component{
  constructor() {
    super(); // 调用基类的所有的初始化方法
    this.state = {
      username: "Parry",
      age: 20
    }; // 初始化赋值
  };

  changeUserInfo(ageVal) {
    this.setState({age: ageVal});
  };

  handleChildValueChangeFn(event) {
    this.setState({age: event.target.value});
  };

  render() {

    // setTimeout(() => {
    //   // 更改 state 的时候
    //   this.setState({username: "IMOOC",age: 30});
    // }, 4000);

    return (
      <div>
        <h2>页面的主体内容</h2>
        <p>接收父页面的属性(props): userid: {this.props.userid} - username: {this.props.username}</p>
        <p>state: username: {this.state.username} - age: {this.state.age}</p>
        <input type="button" value="提交" onClick={this.changeUserInfo.bind(this, 66)}/>
        <BodyChild  {...this.props} id={123} handleChildValueChange={this.handleChildValueChangeFn.bind(this)}/>{/* 拿到父组件的值传递给子组件*/}
      </div>
    )
  };
}

// props 验证
BodyIndex.propTypes = { // 设置props类型
  userid: PropTypes.number.isRequired,
}
BodyIndex.defaultProps = { // 设置props默认值
  username: '这是一个默认的用户名'
}
