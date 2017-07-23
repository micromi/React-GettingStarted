import React from 'react';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import { Row, Col, message, BackTop  }　from 'antd';

export default class mobileNewsDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      newsItem: ''
    }
  };

  componentDidMount() {
    const myFetchOptions = {
      method: 'GET',
    };
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey="
     + this.props.match.params.uniquekey, myFetchOptions)
     .then(response => response.json())
     .then(json => {
       console.log(json);
       message.success("请求成功！");
       this.setState({newsItem: json});
       document.title = `${this.state.newsItem.title} - React News | React 驱动的新闻平台`;
     })
     .catch(error => {
       console.log('request failed', error);
       message.success("请求失败！");
     });
  };

  createMarkup() {
    return { __html: this.state.newsItem.pagecontent};
  };

  render() {
    return (
      <div id="mobileDetailContainer">
        <MobileHeader></MobileHeader>
        <div className="ucmobileList">
          <Row>
            <Col span={24} className="container">
              <div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
            </Col>
          </Row>
          <MobileFooter></MobileFooter>
          <BackTop />
        </div>
      </div>
    )
  }
}
