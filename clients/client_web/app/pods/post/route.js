import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    let { post_id } = params;
    return this.get('store').findRecord('post', post_id );
  }
});
