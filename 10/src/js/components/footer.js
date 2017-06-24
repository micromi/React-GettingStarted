import React from 'react';

// var footerCss = require("../../css/footer.css");
// import footerCss from "../../css/footer.css";

export default class ComponentFooter extends React.Component{
  render() {
    // console.log(footerCss);
    var footCovertStyle = {
      "miniFooter": {
        "backgroundColor": "#333333",
        "color": "#ffffff",
        "paddingLeft": "20px",
        "paddingTop": "3px",
        "paddingBottom": "3px"
      },
      "miniFooter_h1": {
        "fontSize": "15px"
      }
    };
    return (
      <footer style={footCovertStyle.miniFooter}>
        <h1 style={footCovertStyle.miniFooter_h1}>这里是页脚，一般放置版权的一些信息</h1>
      </footer>
    )
  }
}
