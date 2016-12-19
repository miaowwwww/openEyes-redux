import React, { Component } from 'react';


export default class Login extends Component {
	
	constructor(props) {
		super(props);
	}

	handleSubmit = (e) => {
		e.stopPropagation();
		let user = {};
		user.account = this.refs.account.value;
		user.password = this.refs.password.value;
		
		if( !user.account || !user.password ){
			return ;
		}
		this.props.login(user);
		// this.props.closeView();
		console.log(user);
	}

	handleClose = (e) => {
		this.props.closeView();
	}

	render() {
		const { isLogining } = this.props;
		return (
			<div id="Login">
				<div className="black-bg"></div>
				<i className="close" onClick={this.handleClose}>X</i>
				<h1>开眼世界</h1>
				<p>登录优即可评论即同步已收藏的视频</p>
				{isLogining && <p>i am loading logining</p>}
				<form>
					<label><i>♀</i><input type="text" ref="account" placeholder="请输入邮箱或电话" /></label>
					<label><i>♂</i><input type="password" ref="password" placeholder="请输入密码" /></label>
					<a className="submit" onClick={this.handleSubmit} >登录</a>
					<a>新用户注册</a>
				</form>
			</div>
		)
	}
};