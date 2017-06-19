import React from 'react';

export default class BodyChild extends React.Component{
  render() {
    return (
      <div>
        <p>子页面输入age: <input type="text" onChange={this.props.handleChildValueChange}/></p>
        <p>来自父组件的父组件值： {this.props.userid} - {this.props.username} <br/> 来自父组件的值：{this.props.id}</p> {/* 拿到父组件的值及父组件的父组件的值*/}
      </div>
    )
  }
}
