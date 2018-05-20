import Component from '@ember/component';
import { on, alias, getJson, tip } from 'app-ember/utils';

export default Component.extend({
  @alias('model.data') categories: '',
  isShowingModal: false,
  @on('init')
  domInit() {
    this.getCategories();
  },
  async getCategories() {
    let model = await getJson('api/categories');
    this.set('model', model);
  },
  getRootId(node) {
    return this.$().find(`[data-id='${node._id}']`).closest('[data-depth=1]').data('id');
  },
  getParentId(node) {
    return this.$().find(`[data-id='${node._id}']`).closest('[data-depth]').data('id');
  },
  actions: {
    itemClicked() {
      this.get('itemClicked') && this.get('itemClicked')(...arguments);
    },
    edit(node = {}, status) {

      this.send('openModal');
      this.set('node', node);
      this.set('status', status);
      switch (status) {
        case 'del':
        case 'update':
          this.set('tmpNode', node);
          break;
        case 'add':
          this.set('tmpNode', {});
          break;
        default:
          break;
      }
    },
    addTopNode() {
      this.send('edit', {}, 'add');
    },

    toggleModal() {
      this.toggleProperty('isShowingModal')
    },

    openModal() {
      this.set('isShowingModal', true);
    },

    async modalOk() {
      let { node, status, tmpNode } = this.getProperties(['node', 'status', 'tmpNode']);
      let { name } = tmpNode;
      let rootId = this.getRootId(node);
      let { _id } = node;
      let opResult;
      switch (status) {
        case 'add':
          {
            let parentId = this.getParentId(node);
            opResult = await getJson('api/addCategory', { rootId, name, parentId }, 'post');
          }
          break;
        case 'del':
          opResult = await getJson('api/delCategory', { rootId, _id }, 'post');
          break;
        case 'update':
          opResult = await getJson('api/updateCategory', { rootId, _id, name }, 'post');
          break;
        default:
          break;
      }
      if (opResult.meta.state) {
        this.set('isShowingModal', false);
        tip(`${this.get('status')}成功!!`);
      }
    },
    modalCancel() {}
  }
});
