const { fmtRes } = '../../utils';
const mongo = require('../../utils/mongo');

let myMongo = new mongo();
/**
 * 响应 GET 请求（响应微信配置时的签名检查请求）
 */
async function get (ctx, next) {
    let { cate, skip = 0, limit = 20 } = ctx.query;  // 默认每次返回 20 条
    let col = await myMongo.getDB().collection('category');
    let docs = [];
    let cursor;
    if (cate) {
      cursor = col.find({ cateNodes: { $regex: new RegExp(cate) } })
    } else {
      try {
        cursor = col.find();
      } catch (e) {
          ctx.status = 500;
          ctx.body = fmtRes('服务端错误', false);
      }
    }
    cursor.project({ title: 1 })
      .sort([ ["createTime", -1], ["lastUpdateTime", -1] ])
      .skip(skip)
      .limit(limit);
    cursor.forEach(doc => {
      doc.type = 'post';
      docs.push(doc);
    }, err => {
      if (!err) {
          ctx.body = fmtRes(docs, true);
      }
    });
}

async function post (ctx, next) {

    const body = ctx.request.body

    ctx.body = 'success'
}

module.exports = {
    post,
    get
}
