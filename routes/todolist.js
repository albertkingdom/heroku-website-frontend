const db = require(__dirname + "/../_connect_db");
const express = require("express");
const router = express.Router();
const multer = require('multer')
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });



    
router.post('/savetodb',(req,res)=>{
        const sql = `INSERT INTO \`todolist\` (\`title\`,\`content\`) VALUES (?,?)`;
        console.log(req.body)
        db.queryAsync(sql,[req.body.title,req.body.content])
        .then(result=>{
            res.json({result})
        })
        .catch(error => {
            // res.send(error);
            console.log(error);
            // res.json(output);
        });
    })
//從databse抓資料
router.get('/gettodo',(req,res)=>{
    const sql = `SELECT * FROM todolist`;

    db.queryAsync(sql)
    .then(result=>{
        res.json(result)
    })
})
//刪除
router.post('/deltodo',(req,res)=>{
    console.log('deltodo',req.body)
    const sql = `DELETE FROM todolist WHERE Id = ?`
    db.queryAsync(sql,[req.body.delid])
    .then(result=>{
        res.json(result)
    })
})
// router.post('/test',(req,res)=>{
//     console.log(req.body)
//     res.send('test')
// })

//更新
router.post('/updatetodo',(req,res)=>{
    console.log('updatetodo',req.body)
    const sql = `UPDATE todolist SET content = '${req.body.content}' WHERE Id = ${req.body.editid}`;
    db.queryAsync(sql)
    .then(
        result=>{res.json(result)}
    )
})

//完成
router.put('/completetodo',(req,res)=>{
    console.log('completetodo',req.body)
    const sql = `UPDATE todolist SET completed = 1 WHERE Id = ${req.body.completeid}`
    db.queryAsync(sql)
    .then(
        result=>{res.json(result)}
    )
})
router.get('/',(req,res)=>{
    console.log('123test')
    res.send('hello123')
})
module.exports = router;