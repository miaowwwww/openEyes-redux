import React from 'react';
import defaultImg from '../../../images/default.png';
import UserImg from '../../../images/user.jpg';
class PageMy extends React.Component {

	constructor(props, context) {
		super(props, context);
		this.state = {};
	}

	componentDidMount() {
	}
	
	login = () => {
		console.log('login');
		this.setState({photoId: 'user.jpg', name: 'dashabi'})
	}

	handleCollection = () => {
		console.log('handleCollection');
	}

	handleComment = () => {
		console.log('handleComment');
	}

	handleImg = () => {
		console.log('handleImg');

	}

	render() {
		return (
			<div className="PageMy">
				<header>
					<i className="icon" >☺</i>
					<img src={ this.state.photoId && userImg || defaultImg } onClick={this.handleImg} />
					<p>{ name || '点击登陆后可评论'}</p>
					<ul>
						<li onClick={this.handleCollection}><i>♥</i>我的收藏</li>
						<li onClick={this.handleComment}><i>✉</i>我的评论</li>
					</ul>
				</header>
				<dl>
					<dt>我的消息</dt>
					<dt>我的关注</dt>
					<dt>我的缓存</dt>
					<dt>功能开关</dt>
				</dl>
			</div>
		)
	}
};

module.exports = PageMy;