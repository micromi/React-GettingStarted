import React from 'react';

export default class ComponentDetails extends React.Component{

  render() {
    console.log(this.props.match.params);
    return (
      <div>
        <h2>这里是嵌套在list页中的详细的页面</h2>
        <div>path => {this.props.match.path}</div>
        <div>url =>  {this.props.match.url}</div>
        <div>{this.props.match.isExact}</div>
        <div>params.id => {this.props.match.params.id}</div>
      </div>
    );
  };
};
