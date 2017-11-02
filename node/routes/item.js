var express = require('express');
var router = express.Router();
var mysql=require('mysql');

var conn=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'root'
})
/* GET home page. */

router.post('/insert', function(req, res, next) {
    res.header('Access-Control-Allow-Origin','*');
    var title=req.body.title;
    var write=req.body.write;
    var con=req.body.con;
    //var time=now();
    //console.log(time)
    conn.query('INSERT INTO taobao.biao(tit,wr,nr,timer) VALUES("'+title+'","'+write+'","'+con+'",NOW())',function(err,rows){
        res.send(rows);
        //console.log(rows)
    })
});
router.post('/cha', function(req, res, next) {
    res.header('Access-Control-Allow-Origin','*');
    conn.query('SELECT * FROM taobao.biao',function(err,rows){
        res.send(rows);
    })
});
module.exports = router;
