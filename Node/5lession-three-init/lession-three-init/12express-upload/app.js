var express = require('express');
var app = express();
var router = express.Router();
app.listen(3000,function () {
    console.log('3000');
})

app.use(router);
router.post('/fromData',function (req,res) {
    req.on('data',function (data) {
        console.log(data);
        res.json({
            code:1
        })
    })
})