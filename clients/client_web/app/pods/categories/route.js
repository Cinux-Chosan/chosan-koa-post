import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel() {
    if (!this.get('loginService.isLoggedIn') && !this.paramsFor('application').login) {
      this.set('loginService.isShowingModal', 1);
    }
  }
});
