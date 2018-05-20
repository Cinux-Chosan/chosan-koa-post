import Component from '@ember/component';
import { on, observes } from 'app-ember/utils';

export default Component.extend({
  localClassNameBindings: ['close'],
  attributeBindings: ['style'],
  close: false,
  fontSize: 12,
  @on('didInsertElement')
  @observes('fontSize')
  styleChanged() {
    let fontSize = this.get('fontSize');
    this.$('span').css({
      fontSize
    })
  },
  click() {
    this.toggleProperty('close');
  }
});
