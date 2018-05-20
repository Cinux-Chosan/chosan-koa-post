import Controller from '@ember/controller';
import { service, on, computed } from 'app-ember/utils/decorators';

export default Controller.extend({
  @service checkLogin: '',
  @on('init')
  async initController() {
    this.get('login');
  },
  @computed('model.{createTime,lastUpdateTime}')
  get postRemark() {
    let createTime = this.getWithDefault('model.createTime', '');
    let updateTime = this.getWithDefault('model.lastUpdateTime', '');
    let postRemark = '';
    if (createTime) {
      postRemark = `文章创建于： ${createTime.toLocaleString()}；`;
    }
    if (updateTime) {
      postRemark += updateTime ? ` 最后更新于：${updateTime.toLocaleString()}；` : '';
    }
    return postRemark;
  }
});