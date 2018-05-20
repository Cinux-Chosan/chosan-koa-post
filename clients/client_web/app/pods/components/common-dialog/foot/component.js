import Component from '@ember/component';

export default Component.extend({
  classNames: 'flex-all-center',
  isShowingModal: false,
  actions: {
    modalOk() {
      this.get('onOk') && this.get('onOk')();
    },
    modalCancel() {
      this.set('isShowingModal', false);
      this.get('onCancel') && this.get('onCancel')();
    }
  }
});
