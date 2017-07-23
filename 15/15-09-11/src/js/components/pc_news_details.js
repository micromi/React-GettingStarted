import React from 'react';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import PCNewsImageBlock from './pc_news_image_block';
import CommonComments from './common_comments';
import { Row, Col, message, BackTop  }　from 'antd';

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
            <hr />
            <CommonComments uniquekey={this.props.match.params.uniquekey} />
          </Col>
          <Col span={6}>
            <PCNewsImageBlock count={40} type="top" width="100%" cartTitle="相关新闻" imageWidth="136px" />
          </Col>
          <Col span={2}></Col>
        </Row>
        <PCFooter></PCFooter>
        <BackTop />
      </div>
    )
  }
}
