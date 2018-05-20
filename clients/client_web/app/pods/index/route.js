import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    let store = this.get('store');
    let { category: cate } = this.paramsFor('application');
    if (cate) {
      return RSVP.hash({
        posts: store.query('post', { cate })
      });
    } else {
      return RSVP.hash({
        posts: store.findAll('post')
      });
    }
  }
});
