const { fmtRes } = '../../utils';
const mongo = require('../../utils/mongo');

let myMongo = new mongo();

module.exports = async (ctx, next) => {

    let loginTimes = ctx.session.loginTimes;
    ctx.session.loginTimes = loginTimes ? ++loginTimes : 0;
    if (ctx.session.failTimes > 5) {
        return ctx.body = fmtRes('兄弟, 错 5 次了还不死心 ?', false);
    }

    let col = await myMongo.getDB().collection('user');
    let pwd = encrypt(ctx.body.pwd);
    let doc = { ...ctx.body, pwd };
    let r = await col.findOne(doc);

    if (r) {
        ctx.session.username = ctx.body.name;
        ctx.session.uid = r._id;
        ctx.body = fmtRes('登陆成功', true);
        console.log(ctx.session.username);
    } else {
        let failTimes = ctx.session.failTimes;
        ctx.session.failTimes = failTimes ? ++failTimes : 1;
        ctx.body = fmtRes('登陆失败!', false);
    }
}
