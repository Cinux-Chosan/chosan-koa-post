/**
 * ajax 服务路由集合
 */
const router = require('koa-router')({
    prefix: '/web'
})
const controllers = require('../controllers/web')

router.get('/login', controllers.login)

// router.get('/posts', controllers.posts.get)

router.get('/posts', controllers.posts.get)

module.exports = router
