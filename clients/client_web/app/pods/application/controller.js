import Controller from '@ember/controller';
import $ from 'jquery';
import { run } from '@ember/runloop';
import { observes, alias } from 'app-ember/utils/decorators';

export default Controller.extend({
  withSidebar: true,
  queryParams: ['login', 'category'],
  category: '',
  @alias('loginService.isShowingModal') login: '',
  @observes('withSidebar')
  withSidebarChanged() {
    $('.common-sidebar').one('transitionend webkitTransitionEnd mozTransitionEnd oTransitionEnd', () => {
      run(() => {
        $(window).resize();  // 触发 editor.md 的自动适应布局
      })
    })
  },
  actions: {
    toggleSidebar(withSidebar) {
      this.set('withSidebar', withSidebar);
    },
    goToCategory(category) {
      this.transitionToRoute('index', { queryParams: { category: category.cateNodes }});
    }
  }
});
