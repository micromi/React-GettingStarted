import React from 'react';

export default class ComponentNews extends React.Component{
  render() {
    return (
      <div>
        <h2>这里是news页面</h2>
        {this.props.children}
      </div>
    );
  };
}
