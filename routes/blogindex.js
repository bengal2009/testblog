var express = require('express');
var router = express.Router();

/* GET users listing. */
/*
router.get('/', function(req, res, next) {
    res.send('Reg');
});
*/
router.get('/', function(req, res, next) {
    res.render('blog/index', {
        title: '用户列表后台管理系统',
        layout: 'blog/blogtemp'
    });
});

router.get('/login', function(req, res, next) {
    res.render('blog/login', {
        title: '用户列表后台管理系统',
        layout: 'blog/blogtemp'
    });
});

router.get('/reg', function(req, res, next) {
    res.render('blog/reg', {
        title: '用户列表后台管理系统',
        layout: 'blog/blogtemp'
    });
});
module.exports = router;
