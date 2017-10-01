var express = require('express');
var router = express.Router();

/* GET users listing. */
/*
router.get('/', function(req, res, next) {
    res.send('Reg');
});
*/
//執行註冊
exports.doReg = function(req, res){
    if(req.body['password-repeat'] != req.body['password']){
        console.log('密碼輸入不一致。');
        console.log('第一次輸入的密碼：' + req.body['password']);
        console.log('第二次輸入的密碼：' + req.body['password-repeat']);
        return res.redirect('/reg');
    }
    else{
        //register success, redirect to index
        res.cookie('userid', req.body['username'], { path: '/', signed: true});
        res.cookie('password', req.body['password'], { path: '/', signed: true });
        return res.redirect('/');
    }
};
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
// router.post('/reg', doReg());
router.post('/reg', function(req, res, next) {
    console.log("First"+req.body['password']);
    console.log("Second:"+req.body['password-repeat'])
    console.log("Username:"+req.body['username'])

    // res.send("Done!")
    return res.redirect('/blog/reg');
    layout: 'blog/blogtemp'
});
module.exports = router;
