import Component from '@ember/component';
import { on, observes } from 'app-ember/utils';

export default Component.extend({
  localClassNameBindings: ['close'],
  fontSize: 12,
  close: true,
  bubbles: true,
  @on('didInsertElement')
  @observes('fontSize')
  stylesChanged() {
    let fontSize = this.get('fontSize');
    this.$().css({
      fontSize
    });
  },
  click() {
    this.toggleProperty('close');
    this.get('onClick') && this.get('onClick')(...arguments);
    return this.get('bubbles');
  }
});
