const db = require(__dirname + "/../_connect_db");
const express = require("express");
const router = express.Router();
const multer = require('multer')
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const axios = require('axios')
const cheerio = require('cheerio')

function getgossip(url){
    axios.get(url)
    .then(response=>{console.log(response.data)})
    
}
//抓熱門前3名文章內容
router.post('/top3',(req,res)=>{
    
    console.log('body url length',req.body.url.length)
    const promises=[]
    for(let i=0; i<req.body.url.length;i++){
        let promise = axios.get(req.body.url[i],{
            headers:{
                Cookie:"over18=1"
            }
        })
        promises.push(promise)
    }
    
    
    axios.all(promises)
    .then(axios.spread((...response)=>{
        console.log(response.length)
        const top3article=[]
        for(let i=0;i<response.length;i++){
            let $=cheerio.load(response[i].data)
            // console.log($('#main-content').text())
            

            let images = response[i].data.match(/imgur.com\/[0-9a-zA-Z]{7}/g);
            images=[...new Set(images)]
            console.log(images)
            top3article.push({text:$('#main-content').text(),img:images,title:$('.article-meta-value').eq(2).text(),url:$('.f2 a').attr('href')})
        }
        // console.log('top3 length',top3article.length)
        return top3article
    }))
    .then(top3article=>res.send(top3article))
    .catch(error=>{
        console.log('error',error)
    })
})
//抓八卦版文章標題和連結(最新一頁)
router.get('/',(req,res)=>{
    const url ='https://www.ptt.cc/bbs/Gossiping/index.html';
    //利用axios做ajax，再利用cheerio(類似jquery)做資料處理
    axios.get(url,{
        headers:{
            Cookie:"over18=1"
        }
    })
    .then(response=>{
        let $ = cheerio.load(response.data);
        // const prev = $('.btn-group-paging a').eq(1).attr('href').match(/\d+/)[0];
        
        //文章連結
        const article=[]
        // console.log($('.r-ent .title a'))
        const pagelink=['']
        const prevpagelink = $('.btn-group-paging a').eq(1).attr('href').match(/\d+/g)[0]
        pagelink.push(prevpagelink,`${+prevpagelink-1}`)
        // console.log(pagelink)
        let pagelink2 = pagelink.map((url)=>'https://www.ptt.cc/bbs/Gossiping/index'+url+'.html')
        // console.log(pagelink2)
        const promises=[]
        for(let i=0; i<pagelink2.length;i++){
            let promise = axios.get(pagelink2[i],{
                headers:{
                    Cookie:"over18=1"
                }
            })
            promises.push(promise)
        }
        //一次做多個request
        axios.all(promises).then(axios.spread((...response2)=>{
           
                
                for(let i=0;i<response2.length;i++){
                    console.log('response2 length',response2.length)
                  let $ = cheerio.load(response2[i].data);

                   for (let i=0;i<$('.r-ent .title').length;i++){
                    // 文章標題、連結存入article array
                    article.push( 
                        {titleText:$('.r-ent .title a').eq(i).text(),
                        link:'https://www.ptt.cc'+$('.r-ent .title a').eq(i).attr('href'),
                        count:$('.r-ent .title').prev().eq(i).text() !== ''?$('.r-ent .title').prev().eq(i).text():'0'})
                    }
                    console.log('article.length',article.length)
                    // res.json(article)
                   
                }
                return article
                }))
                .then(article=>res.send(article))
                .catch(error=>{
                    console.log('error',error)
                })
        // 文章標題、連結存入titles array
        // for (let i=0;i<$('.r-ent .title').length;i++){
        //     article.push( 
        //         {titleText:$('.r-ent .title a').eq(i).text(),
        //         link:'https://www.ptt.cc'+$('.r-ent .title a').eq(i).attr('href'),
        //     count:$('.r-ent .title').prev().eq(i).text() !== ''?$('.r-ent .title').prev().eq(i).text():'0'})
        // }

       
        // res.send(article)
        
        // res.send(titles) 
    })
    
})
module.exports = router;