import Route from '@ember/routing/route';
import { later } from '@ember/runloop';

export default Route.extend({
  queryParams: {
    post_type: {
      replace: true
    }
  },
  model(params) {
    let post_id = params.edit_id;
    if (post_id != '_') {
      return this.get('store').findRecord('post', post_id);
    } else {
      return this.get('store').createRecord('post', {
        title: '',
        content: '',
        postType: 'markdown'
      });
    }
  },
  resetController(controller, isExiting) {
    if (isExiting) {
      later(() => controller.set('post_type', ''), 1000);  // 延迟设置 post_type, 否则 template 中 根据该 querypamras 的值变了过后会导致渲染默认的 markdown-editor,但是路由正在发生改变, 导致 set values on destroyed object 错误.
    }
  }
});
