const _ = require('lodash')
const fs = require('fs')
const path = require('path')

/**
 * 映射 d 文件夹下的文件为模块
 */
const mapDir = d => {
    const tree = {}

    // 获得指定文件夹下的所有的文件夹和文件
    const [dirs, files] = _(fs.readdirSync(d)).partition(p => fs.statSync(path.join(d, p)).isDirectory())

    // 映射文件夹
    dirs.forEach(dir => {
        tree[dir] = mapDir(path.join(d, dir))
    })

    // 映射文件
    files.forEach(file => {
        if (path.extname(file) === '.js') {
            tree[path.basename(file, '.js')] = require(path.join(d, file))
        }
    })

    return tree
}



function formatResponseData(data, meta = {}) {
    if (Array.isArray(data)) {
      data = data.map(el => mkJSONAPI(el));
    } else {
      data = mkJSONAPI(data);
    }
    meta = typeof meta !== 'object' ? { state: meta } : meta;
    return JSON.stringify({ data, meta });
}


// 默认导出指定文件夹下的映射
module.exports = { 
    mapDir,
    fmtRes: formatResponseData
}
