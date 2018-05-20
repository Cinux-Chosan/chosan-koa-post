import Controller from '@ember/controller';
import { computed } from 'app-ember/utils';

let POSTTYPE = ['markdown', 'markdown', 'html'];

export default Controller.extend({
  queryParams: [{
    post_type: {
      scope: 'controller'
    }
  }],
  post_type: '',
  editor: '',
  @computed('model.title')
  get editormdUpload() {
    let title = this.get('model.title');
    return `/upload/editormdUpload?dirname=${title}`;
  },
  @computed('model.title')
  get kindEditorUpload(){
    let title = this.get('model.title');
    return `/upload/kindEditorUpload?dirname=${title}`;
  },
  actions: {
    submit() {
      let { model, post_type, editor } = this.getProperties(['model', 'post_type', 'editor']);
      model.set('postType', post_type ? POSTTYPE[+post_type] : model.get('postType'));
      model.set('content', editor.getContent());
      this.get('model').save();
    },
    pickCategory(category) {
      this.set('model.cateName', category.name);
      this.set('model.cateNodes', category.cateNodes);
    }
  }
});
