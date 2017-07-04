import React from 'react';
import { Row, Col } from 'antd'; // 栅格组件
import { Menu, Icon, Tabs, message, Form, Input,Button, CheckBox, Modal } from 'antd';
import { Link } from 'react-router-dom';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class PCHeader extends React.Component {
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
    console.log(e.key);
    if (e.key == "register") {
			this.setState({current: 'register'});
			this.setModalVisible(true);
		} else {
			{
				this.setState({current: e.key});
			}
		}
  }

  handleSubmit(e) { // 登录注册提交表单
    // console.log('click ', e);
    // 页面开始向 API 进行提交数据
    e.preventDefault();
    const myFetchOptions = {
      method: 'GET'
    };
    var formData = this.props.form.getFieldsValue(); // 获取一组输入控件的值，如不传入参数，则获取全部组件的值
    console.log(formData);
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=register&username=userName&password=password&r_userName=" + formData.r_userName + "&r_password="
		+ formData.r_password + "&r_confirmPassword="
		+ formData.r_confirmPassword, myFetchOptions)
		.then(response => response.json())
		.then(json => {
      console.log(json);
      if (json.UserId) {
        this.setState({userNickName: json.NickUserName, userid: json.UserId});
  			localStorage.userid= json.UserId;
  			localStorage.userNickName = json.NickUserName;
      }
      message.success("请求成功！");
		})
    .catch(error => {
      console.log('request failed', error);
      message.success("请求失败！");
    });
		// message.success("请求成功！");
		this.setModalVisible(false);
  };

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
  							<Tabs type="card">
  								<TabPane tab="注册" key="2">
  									<Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
  										<FormItem label="账户">
                        {getFieldDecorator('r_userName')(
                          <Input prefix={<Icon type="user" style={{ fontSize: 14 }} />}  placeholder="请输入您的账号"/>
                        )}
  										</FormItem>
  										<FormItem label="密码">
                        {getFieldDecorator('r_password')(
                          <Input prefix={<Icon type="lock" style={{ fontSize: 14 }} />} type="password" placeholder="请输入您的密码"/>
                        )}
  										</FormItem>
  										<FormItem label="确认密码">
                        {getFieldDecorator('r_confirmPassword')(
                          <Input prefix={<Icon type="lock" style={{ fontSize: 14 }} />} type="password" placeholder="请再次输入您的密码"/>
                        )}
  										</FormItem>
  										<Button type="primary" htmlType="submit" >注册</Button>
  									</Form>
  								</TabPane>
  							</Tabs>
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
