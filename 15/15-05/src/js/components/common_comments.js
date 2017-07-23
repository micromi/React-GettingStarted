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

  handleSubmit() {
    console.log('提交评论。。。')
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="comment">
        <Row>
          <Col span={24}>
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
