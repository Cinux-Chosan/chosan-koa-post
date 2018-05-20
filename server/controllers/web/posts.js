const { fmtRes } = require('../../utils/index');
const mongo = require('../../utils/mongo');

let myMongo = new mongo('posts');
/**
 * 响应 GET 请求（响应微信配置时的签名检查请求）
 */
async function get(ctx, next) {
    let { cate, skip = 0, limit = 20 } = ctx.query;  // 默认每次返回 20 条
    let db = await myMongo.getDB();
    let col = db.collection('posts');
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
        .sort([["createTime", -1], ["lastUpdateTime", -1]])
        .skip(skip)
        .limit(limit);
    
    let arr = await cursor.toArray(); 
    // cursor.forEach(doc => {
    //     doc.type = 'post';
    //     docs.push(doc);
    // })
    arr.forEach(el => el.type = 'post');
    ctx.body = fmtRes(arr, true);
}

async function post(ctx, next) {

    const body = ctx.request.body

    ctx.body = 'success'
}

module.exports = {
    post,
    get
}
