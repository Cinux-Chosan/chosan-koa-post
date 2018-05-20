import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr(),
    content: DS.attr(),
    postType: DS.attr(),
    cateName: DS.attr(),
    cateNodes: DS.attr(),
    createTime: DS.attr('date'),
    lastUpdateTime: DS.attr('date')
});
