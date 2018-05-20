import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    category: {
      refreshModel: true
    }
  }
});
