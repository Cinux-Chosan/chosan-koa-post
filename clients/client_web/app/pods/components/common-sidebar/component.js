import Component from '@ember/component';

export default Component.extend({
  classNames: ['w250'],
  localClassNames: 'root',
  localClassNameBindings: ['isShow::hide'],
  isShow: true,
  actions: {
    toggle() {
      this.toggleProperty('isShow');
    }
  }
});
