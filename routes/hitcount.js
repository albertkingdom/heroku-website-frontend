const db = require(__dirname + "/../_connect_db");
const express = require("express");
const router = express.Router();
const multer = require('multer')

// router.get('/',(req,res)=>{
//     console.log('123test')
//     res.send('hello')
// })
router.get('/',(req,res)=>{
    const sql_get = `SELECT count_num FROM \`hitcount\` WHERE Id = 1`;
    const sql_update = `UPDATE \`hitcount\` SET Id=1, count_num = ?`;
    const sql_getcount = `SELECT count(1) FROM \`hitcount\``;
    const sql_updatecount = `INSERT INTO hitcount (\`count_num\`) VALUES ('1')`;
    db.queryAsync(sql_getcount)
    .then(result=>{
        // res.json({})
        // console.log(result[0]['count_num']) //1
        // let old_count = result[0]['count_num'];
        // const new_count = old_count + 1;
        // const get_old_count = result;
        // console.log('old_count',old_count)
        // console.log('new_count',new_count)
        console.log('count(1)',result)
        res.json(result)
        return db.queryAsync(sql_updatecount)
    })
    .then(result2=>{
        console.log(result2)
        // res.json(result2)
    })
    .catch(error => {
        // res.send(error);
        console.log(error);
        // res.json(output);
    });
})


module.exports = router;