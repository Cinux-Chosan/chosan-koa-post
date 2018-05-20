// import DS from 'ember-data';
// import RSVP from 'rsvp';
// import { run } from '@ember/runloop';
// import $ from 'jquery';
// import { computed } from '@ember/object';
// import modelMap from 'app-ember/models/model-map';
// import { getJson } from 'app-ember/utils';

// // import Inflector from 'ember-inflector';

// // const { inflector } = Inflector;

// // export default DS.RESTAdapter.extend({
// export default DS.Adapter.extend({
//   namespace: 'api',
//   host: computed(() => location.hostname.match(/(localhost|172|192)/) ? `//${location.hostname}:3000/` : '/'),
//   findRecord(store, type, id, snapshot) {
//     let path = this.buildURL(type.modelName, 'findRecord');
//     return getJson(path, { id });
//   },
//   queryRecord(store, type, query) {
//     let path = this.buildURL(type.modelName, 'queryRecord');
//     return getJson(path, query);
//   },
//   findAll(store, type, sinceToken) {
//     let query = { since: sinceToken };
//     let path = this.buildURL(type.modelName, 'findAll');
//     return getJson(path, query);
//   },
//   updateRecord(store, type, snapshot) {
//     let data = this.serialize(snapshot, { includeId: true });
//     let id = snapshot.id;
//     return new RSVP.Promise(function(resolve, reject) {
//       $.ajax({
//         type: 'PUT',
//         url: `/${type.modelName}/${id}`,
//         dataType: 'json',
//         data: data
//       }).then(function(data) {
//         run(null, resolve, data);
//       }, function(jqXHR) {
//         jqXHR.then = null; // tame jQuery's ill mannered promises
//         run(null, reject, jqXHR);
//       });
//     });
//   },
//   // buildURL(modelName, id, snapshot, requestType = '') {

//   //     if (requestType.toLowerCase().includes('record')) { // 像 findRecord 这样查找单条记录的方法，就阻止 REST 将它转换成复数， 只是个人习惯
//   //         // inflector.uncountable(modelName);
//   //     }
//   //     // inflector.disableCache();
//   //     return this._super(...arguments);
//   // },
//   // pathForType() {
//   //   debugger
//   // },

//   buildURL(modelName, requstType) {
//     let modelConfig = modelMap[modelName];
//     let path = modelConfig ? modelConfig[requstType] || modelName : modelName;
//     let { host, namespace } = this.getProperties(['host', 'namespace']);
//     return `${host}${namespace}/${path}`;
//   }
// });
