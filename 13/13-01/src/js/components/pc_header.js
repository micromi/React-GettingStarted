import React from 'react';
import { Row, Col } from 'antd'; // 栅格组件
import { Menu, Icon, Tabs, message, Form, Input,Button, CheckBox, Modal } from 'antd';
import { Link } from 'react-router-dom';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class PCHeader extends React.Component{
  constructor() {
    super();
    this.state = {
      current: 'top',// 当前选中的导航栏
      modalVisible: false, // 模态框是否显示
      action: 'login',// 判断登录还是注册
      hasLogined: false, // 是否已经登录
      userNickName: '', // 用户登录后昵称
      userid: 0, // 用户id
    };
  }
  setModalVisible(value) { // 模态框显示隐藏
    this.setState({ modalVisible: value });
  }
  handleClick(e) { // 高亮导航
    console.log('click ', e);
		this.setState({current: e.key});
  }

  render() {
    let { getFieldDecorator } = this.props.form; // getFieldDecorator 用于和表单进行双向绑定
    const userShow = this.state.hasLogined
      ? <Menu.Item key="logout" class="register">
          <Button type="primary" htmlType="button">{this.state.userNickName}</Button>
          &nbsp;&nbsp;
          <Link to="/usercenter" target="_blank">
            <Button type="dashed" htmlType="button">个人中心</Button>
          </Link>
          &nbsp;&nbsp;
          <Button type="ghost" htmlType="button">退出</Button>
        </Menu.Item>
      : <Menu.Item key="register" class="register">
         <Icon type="appstore"/>注册/登录
        </Menu.Item>;
    return (
      <div>
        <header>
          <Row>
            <Col span={2}></Col>
            <Col span={4}>
              <a href="/" class="logo">
                <img src="./src/images/logo.png" alt="logo" />
                <span>ReactNews</span>
              </a>
            </Col>
            <Col span={16}>
              <Menu
                onClick={this.handleClick.bind(this)}
                selectedKeys={[this.state.current]}
                mode="horizontal"
               >
                <Menu.Item key="top">
                 <Icon type="appstore"/>头条
                </Menu.Item>
                <Menu.Item key="shehui">
                 <Icon type="appstore"/>社会
                </Menu.Item>
                <Menu.Item key="guonei">
                 <Icon type="appstore"/>国内
                </Menu.Item>
                <Menu.Item key="guoji">
                 <Icon type="appstore"/>国际
                </Menu.Item>
                <Menu.Item key="yule">
                 <Icon type="appstore"/>娱乐
                </Menu.Item>
                <Menu.Item key="tiyu">
                 <Icon type="appstore"/>体育
                </Menu.Item>
                <Menu.Item key="keji">
                 <Icon type="appstore"/>科技
                </Menu.Item>
                <Menu.Item key="shishang">
                 <Icon type="appstore"/>时尚
                </Menu.Item>
                {userShow}
              </Menu>
              <Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible} onCancel= {()=>this.setModalVisible(false)} onOk={() => this.setModalVisible(false)} okText = "关闭">

  						</Modal>
            </Col>
            <Col span={2}></Col>
          </Row>
        </header>
      </div>
    );
  };
};

export default PCHeader = Form.create()(PCHeader); // Form二次封装
