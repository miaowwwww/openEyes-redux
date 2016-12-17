webpackJsonp([3],{

/***/ 267:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class;

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _mobxReact = __webpack_require__(257);

	var _store = __webpack_require__(261);

	var _store2 = _interopRequireDefault(_store);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PageMy = (0, _mobxReact.observer)(_class = function (_React$Component) {
		_inherits(PageMy, _React$Component);

		function PageMy(props, context) {
			_classCallCheck(this, PageMy);

			var _this = _possibleConstructorReturn(this, (PageMy.__proto__ || Object.getPrototypeOf(PageMy)).call(this, props, context));

			_this.login = function () {
				console.log('login');
				_this.store.showLogin = ture;
				// this.setState({photoId: 'user.jpg', name: 'dashabi'})
			};

			_this.handleCollection = function () {
				console.log('handleCollection');
			};

			_this.handleComment = function () {
				console.log('handleComment');
			};

			_this.handleImg = function () {
				console.log('handleImg');
				var user = _this.store.user;

				if (user.id) {
					user.name = window.prompt('请输入你的新名字', user.name) || user.name;
				} else {
					_this.store.showLogin = true;
				}
			};

			_this.store = _store2.default;
			return _this;
		}

		_createClass(PageMy, [{
			key: 'componentDidMount',
			value: function componentDidMount() {}
		}, {
			key: 'render',
			value: function render() {
				var _store$user = this.store.user,
				    photoId = _store$user.photoId,
				    name = _store$user.name;

				console.log(this.store);
				return _react2.default.createElement(
					'div',
					{ className: 'PageMy' },
					_react2.default.createElement(
						'header',
						null,
						_react2.default.createElement(
							'i',
							{ className: 'icon' },
							'\u263A'
						),
						_react2.default.createElement('img', { src: img(photoId || 'default.png'), onClick: this.handleImg }),
						_react2.default.createElement(
							'p',
							null,
							name || '点击登陆后可评论'
						),
						_react2.default.createElement(
							'ul',
							null,
							_react2.default.createElement(
								'li',
								{ onClick: this.handleCollection },
								_react2.default.createElement(
									'i',
									null,
									'\u2665'
								),
								'\u6211\u7684\u6536\u85CF'
							),
							_react2.default.createElement(
								'li',
								{ onClick: this.handleComment },
								_react2.default.createElement(
									'i',
									null,
									'\u2709'
								),
								'\u6211\u7684\u8BC4\u8BBA'
							)
						)
					),
					_react2.default.createElement(
						'dl',
						null,
						_react2.default.createElement(
							'dt',
							null,
							'\u6211\u7684\u6D88\u606F'
						),
						_react2.default.createElement(
							'dt',
							null,
							'\u6211\u7684\u5173\u6CE8'
						),
						_react2.default.createElement(
							'dt',
							null,
							'\u6211\u7684\u7F13\u5B58'
						),
						_react2.default.createElement(
							'dt',
							null,
							'\u529F\u80FD\u5F00\u5173'
						)
					)
				);
			}
		}]);

		return PageMy;
	}(_react2.default.Component)) || _class;

	;

	function img(name) {
		return './images/' + name;
	}

	module.exports = PageMy;

/***/ }

});