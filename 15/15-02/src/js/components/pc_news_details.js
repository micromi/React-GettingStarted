import React from 'react';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import { Row, Col, message }　from 'antd';

export default class PCNewsDetails extends React.Component {
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
      <div>
        <PCHeader></PCHeader>
        <Row>
          <Col span={2}></Col>
          <Col span={14} className="container">
            <div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
          </Col>
          <Col span={6}></Col>
          <Col span={2}></Col>
        </Row>
        <PCFooter></PCFooter>
      </div>
    )
  }
}
