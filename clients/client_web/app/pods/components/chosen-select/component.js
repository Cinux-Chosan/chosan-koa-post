import Component from '@ember/component';
import { on } from 'app-ember/utils';

export default Component.extend({
  // tagName: 'select',
  options: '',
  hasPrompt: true,
  prompt: '-请选择-',
  multiple: false,
  @on('init')
  compInit() {
    this.set('options', this.get('options') || []);
  },
  @on('didInsertElement')
  domInsert() {
    let selector = '#' + this.get('_subId')
    this.$(selector).chosen({
      no_results_text: ''
    });
  },
  change(e) {
    this.set('value', e.target.value);
  }
});
