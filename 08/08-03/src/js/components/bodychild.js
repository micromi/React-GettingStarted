import React from 'react';

export default class BodyChild extends React.Component{
  render() {
    return (
      <div>
        <p>子页面输入age: <input type="text" onChange={this.props.handleChildValueChange}/></p>
      </div>
    )
  }
}
