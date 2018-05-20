import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.JSONAPIAdapter.extend({
    namespace: 'api',
    host: computed(() => location.hostname.match(/(localhost|172|192)/) ? `//${location.hostname}:3000` : '')
});
