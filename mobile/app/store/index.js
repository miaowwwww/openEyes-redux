import mobx, {observable, computed } from 'mobx';

class ObservableStore {
	@observable showLogin = false;
	@observable user = {};
	constructor() {
		//autorun 之后执行一次，因为并没有observable属性依赖其中
		mobx.autorun( () => console.log('isLogin has change') );
	}
}

var store = new ObservableStore();
export default  store;