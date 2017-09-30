var express = require('express');
var router = express.Router();
var users = {
    'byvoid': {
        name: 'Carbo',
        website: 'http://www.byvoid.com'
    }
};
// 在 views 目录下新建 list
router.get('/list', function(req, res) {
    res.render('list', {
        title: 'List',
        items: [1991, 'byvoid', 'express', 'Node.js']
    });
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('hello');
  res.send('The time is ' + new Date().toString());
});
router.all('/user/:username', function(req, res, next) {
// 检查用户是否存在
    if (users[req.params.username]) {
        next();
        console.log("Exist!")
    } else {
        next(new Error(req.params.username + ' does not exist.'));
    }
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
