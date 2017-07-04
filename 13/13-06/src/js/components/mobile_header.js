import React from 'react';
import { Row, Col } from 'antd'; // 栅格组件
import { Menu, Icon, Tabs, message, Form, Input,Button, CheckBox, Modal } from 'antd';
import { Link } from 'react-router-dom';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class MobileHeader extends React.Component{
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

  handleSubmit(e) { // 登录注册提交表单
    // console.log('click ', e);
    // 页面开始向 API 进行提交数据
    e.preventDefault();
    const myFetchOptions = {
      method: 'GET'
    };
    var formData = this.props.form.getFieldsValue(); // 获取一组输入控件的值，如不传入参数，则获取全部组件的值
    console.log(formData);
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=" + this.state.action
      + "&username=" + formData.userName + "&password=" + formData.password
  		+ "&r_userName=" + formData.r_userName + "&r_password=" + formData.r_password
      + "&r_confirmPassword=" + formData.r_confirmPassword, myFetchOptions)
		.then(response => response.json())
		.then(json => {
      console.log(json);
      if (this.state.action == "login" && json.UserId) {
        this.setState({userNickName: json.NickUserName, userid: json.UserId});
  			localStorage.userid = json.UserId;
  			localStorage.userNickName = json.NickUserName;
        this.setState({hasLogined:true});
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

  login() {
    this.setModalVisible(true);
  };

  tabsChange(key) {
    if (key == 1) {
      this.setState({action: 'login'});
    } else if (key == 2) {
      this.setState({action: 'register'});
    }
  }

  render() {
    let { getFieldDecorator } = this.props.form; // getFieldDecorator 用于和表单进行双向绑定
    const userShow = this.state.hasLogined
      ? <span>
          <Icon type="logout"/>
          <Link to="/usercenter">
            <Icon type="inbox"/>
          </Link>
        </span>
      : <Icon type="setting" onClick={this.login.bind(this)} />;
    return (
      <div id="mobileheader">
        <header>
          <img src="./src/images/logo.png" alt="logo" />
          <span>ReactNews</span>
          {userShow}
        </header>

        <Modal title="用户中心" wrapClassName="" visible={this.state.modalVisible} onCancel= {()=>this.setModalVisible(false)} onOk={() => this.setModalVisible(false)} okText = "关闭">
          <Tabs type="card" onChange={this.tabsChange.bind(this)}>
            <TabPane tab="登录" key="1">
              <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
                <FormItem label="账户">
                  {getFieldDecorator('userName')(
                    <Input prefix={<Icon type="user" style={{ fontSize: 14 }} />}  placeholder="请输入您的账号"/>
                  )}
                </FormItem>
                <FormItem label="密码">
                  {getFieldDecorator('password')(
                    <Input prefix={<Icon type="lock" style={{ fontSize: 14 }} />} type="password" placeholder="请输入您的密码"/>
                  )}
                </FormItem>
                <Button type="primary" htmlType="submit" >登录</Button>
              </Form>
            </TabPane>
            <TabPane tab="注册" key="2">
              <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
                <FormItem label="账户">
                  {getFieldDecorator('r_userName')(
                    <Input prefix={<Icon type="user" style={{ fontSize: 14 }} />} placeholder="请输入您的账号"/>
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
      </div>
    );
  };
};

export default MobileHeader = Form.create()(MobileHeader); // Form二次封装
