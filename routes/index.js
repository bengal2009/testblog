var express = require('express');
var router = express.Router();
var users = {
    'byvoid': {
        name: 'Carbo',
        website: 'http://www.byvoid.com'
    }
};
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/bar', function(req, res, next) {
    res.render('bar-1', { title: 'Express' });
});
router.get('/test', function(req, res, next) {
    // res.render('index', { title: 'test' });
    res.send('test');
});
router.get('/test2', function(req, res, next) {
    res.render('test2', {
        title: '用户列表后台管理系统',
        layout: 'admin'
    });
});
router.all('/user/:username', function(req, res, next) {
// 检查用户是否存在
    /*if (users[req.params.username]) {
        next();
        console.log("Exist!")
    } else {
        next(new Error(req.params.username + ' does not exist.'));
    }*/
});
router.get('/user/:username', function(req, res) {
    // res.send('user: ' + req.params.username);
    res.send(JSON.stringify(users[req.params.username]));
});
router.put('/user/:username', function(req, res) {
// 修改用户信息
    res.send('Done');
});
module.exports = router;
