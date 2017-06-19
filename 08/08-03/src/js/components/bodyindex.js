import React from 'react';
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
        <p>props: userid: {this.props.userid} - username: {this.props.username}</p>
        <p>state: username: {this.state.username} - age: {this.state.age}</p>
        <input type="button" value="提交" onClick={this.changeUserInfo.bind(this, 66)}/>
        <BodyChild handleChildValueChange={this.handleChildValueChangeFn.bind(this)}/>
      </div>
    )
  };
}
