// 写接口
var express = require('express');
var router = express.Router();
// 读文件
var fs = require('fs');
var path = require('path')

router.post('/register',function (req,res) {
    // 目的：往user.json中添加对象

    /* 创建一个项添加对象 */
    var user = {
        username:'??',
        password:"???",
        role:"???"
    }
    /* 将获取内容添加到对象 */
    var username = req.body.username;
    var password = req.body.password;
    /* 验证用户名和密码是否合法 */
    let reg = /^[a-zA-Z]\w{5,7}/;
    if (!reg.test(username)) {
        res.json({
            code:200,
            msg:'用户名不合法'
        })
        return
    }
    user.username = username;
    user.password = password;
    user.role = "2";
    console.log(user);
    /* 对象中有哪些内容？如何获取这些内容 */
    /* 验证该对象user.json中是否存在 */
    /* 1.获取user.json */
    var userlist = fs.readFileSync('./data/user.json');
    userlist = JSON.parse(String(userlist));
    console.log(userlist);
    /* 根据username验证是否存在 */
    for (let i = 0; i < userlist.length; i++) {
        userlist[i];
        if (userlist[i].username === user.username) {
            // 存在
            res.json({
                code:201,
                msg:'用户名已注册'
            })
            return
        }
    }
    userlist.push(user);
    console.log(userlist);
    // 将新增的数组，写入到user。json中
    fs.writeFile('./data/user.json',JSON.stringify(userlist),function (err) {
        if (err) {
            res.json({
                code:202,
                msg:'请联系管理员'
            })
        }else{
            res.json({
                code: 203,
                msg: '注册成功'
            })
        }
    })
})

router.post('/login', function (req, res) {
    // 1：获取请求参数 username password
    var username = req.body.username;
    var password = req.body.password;
    // 2: 验证参数是否合法
    var reg = /^[a-zA-Z]\w{5,7}/
    if (!reg.test(username)||!reg.test(password)) {
        res.json({
            code:204,
            msg:'你输入的内容不合法'
        })
        return
    }
    // 3：判断user.json中是否有 username
    var userlist = fs.readFileSync('./data/user.json');
    userlist = JSON.parse(String(userlist));
    var flag = false;
    for (let i = 0; i < userlist.length; i++) {
        if (userlist[i].username === username) {
            flag = true;
            // 存在
            if (userlist[i].password === password) {
                res.json({
                    code:205,
                    msg:'login success',
                    token:`我的用户名是${username}我的密码是${password}`
                })
                return
            }else{
                res.json({
                    code:206,
                    msg:'密码不正确'
                })
                return
            }
        }
        
    }
    if (!flag) {
        res.json({
            code:207,
            msg:'用户名不存在'
        })
    }
    // 4: 验证密码是否正确
})

/**
 * 获取商品列表
 */
router.get('/list',function (req,res) {
    // 1.根据token验证用户是否有权限
    var roles = ['1','2']
    // 获取请求参数
    var token = req.query.token;
    var role = req.query.role;
    console.log(role);
    if (!token || roles.indexOf(role) == -1) {
        res.json({
            code:210,
            msg:'没有权限'
        })
        return
    }
    // 2.获取商品李彪并响应
    var list = fs.readFileSync('./data/list.json');
    list = JSON.parse(String(list));
    var page = req.query.page;
    if (!page) {
        res.json({
            code: 211,
            data: list
        })
        return
    }
    
})
/* 新增 */
router.post('/addshop',function (req,res) {
    // 获取请求参数
    var body = req.body;
    var role = body.role;
    var title = body.title;
    var nice = body.nice;
    // 验证身份
    if (role !='1') {
        res.json({
            code:220,
            msg:"没权限新增商品"
        })
    }
    console.log('有新增商品权限');
    // 新增商品
    var flag = true;
    // 1.根据title，验证商品是否存在
    var list = fs.readFileSync('./data/list.json');
    list = JSON.parse(String(list));
    for (let i = 0; i < list.length; i++) {
        if (list[i].title === title) {
            flag = false;
            // 存在合并
            list[i].nice = Number(nice);
            res.json({
                code: 223,
                msg: '修改商品成功'
            })
            break
        }
    }
    // 不存在将商品添加到商品列表中
    if (flag) {
        list.unshift({
            id: (new Date()).getTime(),
            title: body.title,
            "price": body.price,
            "mack": body.mack,
            "nice": body.nice,
            "img_list_url": body.img_list_url,
            "type_one": body.type_one,
            "type_two": body.type_two
        })
    }
    
    fs.writeFileSync('./data/list.json',JSON.stringify(list),function (err,req,res) {
        if (err) {
            res.json({
                code:222,
                msg:'添加错误'
            })
        }
    })
    res.json({
        code:221,
        msg:'增加商品成功'
    })
})
/* 更新 */
router.post('/updata',function (req,res) {
    var body = req.body;
    if (body.role !='1' ) {
        res.json({
            code:230,
            msg:'没有更改权限'
        })
        return
    }
    console.log('有更新权利');
    var list = fs.readFileSync(path.resolve('./data/list.json'));
    list = String(list);
    list = JSON.parse(list);
    // 根据title找到商品并更新
    for (let i = 0; i < list.length; i++) {
        if (list[i].title == body.title) {
            list[i] = body;
            delete list[i].role;
        }
        break
    }
    res.json({
        code:231,
        msg:'已更新'
    })
})
/* 删除 */
router.post('/delshop', function (req, res) {
    // 获取请求参数
    var body = req.body;
    var role = body.role;
    var title = body.title;
    var nice = body.nice;
    // 验证身份
    if (role != '1') {
        res.json({
            code: 220,
            msg: "没权限删除商品"
        })
    }
    console.log('有删除商品权限');
    // 新增商品
    // 1.根据title，验证商品是否存在
    var list = fs.readFileSync('./data/list.json');
    list = JSON.parse(String(list));
    for (let i = 0; i < list.length; i++) {
        if (list[i].title == title) {
            // 存在合并
            delete list[i]
            res.json({
                code: 243,
                msg: '删除商品成功'
            })
            break;
        }
        if (list.length==i+1){
            res.json({
                code: 244,
                msg: '没有找到该商品'
            })
            return
        }
    }

    fs.writeFileSync('./data/list.json', JSON.stringify(list), function (err, req, res) {
        if (err) {
            res.json({
                code: 222,
                msg: '删除错误'
            })
        }
    })
})



module.exports = router