import Component from '@ember/component';
import { on, computed, alias } from 'app-ember/utils';

const { ceil, floor } = Math;

export default Component.extend({
  classNames: 'clearfix',
  pageData: '',
  maxShow: 8,
  showEndWhenExceed: 6,
  chosenOptions: [5, 10, 20, 50, 100],
  @alias('pageData.total') total : '',
  @alias('pageData.limit') limit : '',
  @alias('pageData.page') page : '',
  @computed('total', 'limit')
  get length() {
    let { total, limit } = this.getProperties(['total', 'limit']);
    return ceil(total / limit);
  },
  @on('init')
  compInit() {
    this.set('pageData', this.get('pageData') || {});
  },
  @computed('totle', 'limit', 'page')
  get items() {
    let { page, length, maxShow } = this.getProperties(['page', 'length', 'maxShow']);
    let tmpMaxShow = floor(maxShow / 2);
    let items = [page];
    let count = 0;
    while (tmpMaxShow != count++) {
      if (page + count <= length) {
        items.pushObject(page + count);
      } else {
        if (page - count - 1 > 0) {
          items.unshiftObject(page - count++);
          tmpMaxShow++;
        }
      }
      if (page - count > 0) {
        items.unshiftObject(page - count);
      } else {
        if (page + count + 1 <= length) {
          items.pushObject(page + ++count);
          tmpMaxShow++;
        }
      }
    }
    if (items[items.length - 1] + 6 <= length) {
      items.pushObjects(['...', length - 1, length]);
    }
    if (items[0] - 6>= ceil(maxShow / 2)) {
      items.unshiftObjects([1, 2, '...']);
    }
    return items;
  },
  actions: {
    itemClick(item = 1) {
      this.set('page', item);
    },
    prev() {
      this.decrementProperty('page');
    },
    next() {
      this.incrementProperty('page');
    }
  }
});
