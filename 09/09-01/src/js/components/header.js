import React from 'react';

export default class ComponentHeder extends React.Component{
  render() {
    const styleComponentHeader = {
      header: {
        backgroundColor: "#333333",
        color: "#ffffff",
        "padding-top": "15px", // 不推荐
        paddingBottom: "15px"
      },
      // 还可以定义其他的样式
    };
    return (
      <header style={styleComponentHeader.header} className="smallFontSize">
        <h1>这里是头部</h1>
      </header>
    )
  }
}
