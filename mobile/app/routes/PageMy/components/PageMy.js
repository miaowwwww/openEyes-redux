import React from 'react';
import { observer } from 'mobx-react';


class PageMy extends React.Component {

	constructor(props, context) {
		super(props, context);
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
		let { photoId, name } = this.store.user;
		console.log(this.store)
		return (
			<div className="PageMy">
				<header>
					<i className="icon" >☺</i>
					<img src={img( photoId || 'default.png')} onClick={this.handleImg} />
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

function img(name) {
	return `./images/${name}`
}

module.exports = PageMy;