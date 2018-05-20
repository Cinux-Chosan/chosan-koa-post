import DS from 'ember-data';
import { camelize } from '@ember/string';

export default DS.JSONAPISerializer.extend({
    primaryKey: '_id',
    serialize() {
        return this._super(...arguments);
    },
    normalize() {
        return this._super(...arguments);
    },
    normalizeResponse(/* store, primaryModelClass, payload, id, requestType */) {
        return this._super(...arguments);
    },
    keyForAttribute(attr) {
    return camelize(attr); // 所有属性名使用驼峰
  }
});
