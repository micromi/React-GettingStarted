import React from 'react';
import { Row, Col } from 'antd'; // 栅格组件
import { Menu, Icon, Tabs, message, Form, Input,Button, CheckBox, Modal, Card } from 'antd';
import { Link } from 'react-router-dom';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class CommonComments extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: '',
    };
  };

  componentDidMount() {
    const myFetchOptions = {
      method: 'GET',
    };
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey="
     + this.props.uniquekey, myFetchOptions)
     .then(response => response.json())
     .then(json => {
       console.log(json);
       var jsonData = [];
       if (json.length >= 20) {  // 只显示最近20条评论
         for (let i = json.length - 20; i < json.length; i++) {
           jsonData.push(json[i]);
         }
       } else {
         jsonData = json;
       }
				this.setState({comments: jsonData});
			})
     .catch(error => {
       console.log('request failed', error);
       message.success("请求失败！");
     });
  };


  handleSubmit(e) {
    console.log('提交评论。。。');
    e.preventDefault();
    const myFetchOptions = {
      method: 'GET'
    }
    const formdata = this.props.form.getFieldsValue();
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid="
     + localStorage.userid + "&uniquekey=" + this.props.uniquekey
     + "&commnet=" + formdata.remark, myFetchOptions)
     .then(response => response.json())
     .then(json => {
			 this.componentDidMount();
       this.props.form.setFields({
          remark: {
            value: '',
          },
        });
		 })
    .catch(error => {
      console.log('request failed', error);
      message.success("请求失败！");
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const {comments} = this.state;
    const commentList = comments.length
    ?
    comments.map((comment, index) => (
      <Card key={index} title={comment.UserName} extra={<a href="javascript:;">发布于 {comment.datetime}</a>} >
        <p>{comment.Comments}</p>
      </Card>
    ))
    :
    '没有加载到任何评论';
    return (
      <div className="comment">
        <Row>
          <Col span={24}>
            {commentList}
            <Form onSubmit={this.handleSubmit.bind(this)}>
              <FormItem label="您的评论">
                {getFieldDecorator('remark', {
                  initialValue: '',
                })(
                  <Input type="textarea" placeholder="请输入您的评论" />
                )}
              </FormItem>
              <Button type="primary" htmlType="submit">提交评论</Button>
            </Form>
          </Col>
        </Row>
      </div>
    )
  };
}

export default CommonComments = Form.create()(CommonComments);
