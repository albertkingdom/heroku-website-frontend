import React, { useEffect, useState } from 'react'
import { Card,Select,Carousel, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom'
import { AiOutlineDown,AiOutlineUp } from 'react-icons/ai';
import $ from 'jquery'
import './ptt.scss'
import Clock from '../component/Clock'
const Ptt = (props) =>{
    const [pttTitle,setPttTitle] = useState([])
    const [count,setCount] = useState(0)
    const [sortMethod,setSortMethod] =useState('0')
    const [top3,setTop3] =useState([])
    const [top3articlecontent,setTop3articlecontent] = useState([])
    const [isloadingImg,setIsloadingImg] = useState(true)
    console.log('props',props)
    useEffect(()=>{
        fetch('/getptt',{
            method:'GET'
        })
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            const noundefinedurl = data.filter(url=>!url.link.match(/undefined/gm))//去掉被刪除文章，網址undefined
            for(let i=0;i<noundefinedurl.length;i++){
                noundefinedurl[i].count = noundefinedurl[i].count.replace(/X/gm,'-')
                noundefinedurl[i].count = noundefinedurl[i].count.replace(/爆/gm,'100')
                console.log(noundefinedurl[i].count)
            }
           
            
            setPttTitle(noundefinedurl);
            return noundefinedurl
            
        })
        .then(noundefinedurl=>{
            const sortdata = [...noundefinedurl].sort(function(a,b){
                return b.count-a.count
            })
            
            fetchtopcontent(sortdata)
        }
        )
     },[])

    //所有文章標題，依照排列方式
    const gossipContent =()=> {
        switch (sortMethod){
            case '1':{
                let tempContent = [...pttTitle].sort(function(a,b){
                    return b.count-a.count
                })
                return tempContent.map((item,index)=>{
                return (
                +item.count>=count?
                <div key={index} className="ptt-title col-11 col-md-5">
                    <p className="ptt-count">{item.count}</p>
                    <a href={item.link}>{item.titleText}</a>
                </div>
                :null)
                })}
            case '2':{
                let tempContent = [...pttTitle].sort(function(a,b){
                    return a.count-b.count
                })
                return tempContent.map((item,index)=>{
                return (
                +item.count>=count?
                <div key={index} className="ptt-title col-11 col-md-5">
                    <p className="ptt-count">{item.count}</p>
                    <a href={item.link}>{item.titleText}</a>
                </div>
                :null)
                })}
            
            case '0':{
                return pttTitle.map((item,index)=>{
                    return (
                    +item.count>=count?
                    <div key={index} className="ptt-title col-11 col-md-5">
                        <p className="ptt-count">{item.count}</p>
                        <a href={item.link}>{item.titleText}</a>
                    </div>
                    :null)
                    })}
            }
        }
        
    

    // 照推文數排序熱門文章
    const topContentData = [...pttTitle].sort(function(a,b){
        return b.count-a.count
    })
    console.log('topContentData',topContentData)
    //fetch 熱門文章的內容
    async function fetchtopcontent(urls){
        const url=[]
        // const noundefinedurl = urls.filter(url=>!url.link.match(/undefined/gm))//去掉被刪除文章，網址undefined
        // console.log('noundefinedurl',noundefinedurl)
        urls.slice(0,50).map((item)=>{url.push(item.link)})
    //    console.log(url)
        let body={url:url}
        // console.log('body',body)
        fetch('/getptt/top3',
        {
        method: 'post',
        body:JSON.stringify(body),
        headers: new Headers({
            'Content-Type': 'application/json',
        })
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setTop3articlecontent(data)
            setIsloadingImg(false)
        }
        )

    }
    //熱門文章顯示
    const topContentDisplay = topContentData.slice(0,3).map((item,index)=>(
        <a key={index} href={item.link}>
            <div>
            <p href={item.link} style={{fontSize:'24px',fontFamily: 'Noto Sans TC'}}>{item.titleText}</p>
            {top3articlecontent.map((article,index2)=>{
                return index2 ==index?
                <div key={index2}>
                <p  className="hotarticle col-5 ">
                    {article.text}
                </p>
                <img className="topImg" src={'https://'+article.img[0]+'.jpg'}></img>
                
                </div>
                :null
                })}
            
            </div>
        </a>
      
    ))
    const top4article = topContentData.slice(0,4).map((item,index)=>(
        <div className="d-flex pl-3" key={index}>
        <span>{item.count}</span>
        <div><a href={item.link} target="_blank">{item.titleText}</a></div>
        </div>
    ))
    // console.log('排序',topContentData)
    //ant ui select
    const { Option } = Select;
    function handleChange(value) {
        // console.log(`selected ${value}`);
        setCount(value)
      }
    //調整排序
    function handleSort(value){
        // console.log(`sort`, +value);
        setSortMethod(value)
    }
    // function handleImgHoverIn(element){
    //     console.log(element)
    //     $(element).next('span').addClass('showBtn')
    // }
    // function handleImgHoverOut(element){
    //     console.log(element)
    //     $(element).next('span').removeClass('showBtn')
    // }
    useEffect(()=>{
        $('div.articleImgs > div > div').hover(function(){
            console.log(this)
            $(this).find('span').toggleClass('showBtn')
        })
    })
    function handleShow1(element){
        
            $('#down1').css('display','none')
            $('#up1').css('display','inline-block')
            $('.top4').css({'max-height':'1000px','overflow':'hidden'})
    }
    function handleHide1(element){
        $('#down1').css('display','inline-block')
        $('#up1').css('display','none')
        $('.top4').css({'max-height':'60px','overflow':'hidden'})
    }
    function handleShow2(element){
        
        $('#down2').css('display','none')
        $('#up2').css('display','inline-block')
        $('.articleImgs').css({'max-height':'500vh','overflow':'hidden'})
    }
    function handleHide2(element){
        $('#down2').css('display','inline-block')
        $('#up2').css('display','none')
        $('.articleImgs').css({'max-height':'0px','overflow':'hidden'})
    }
    const Child1 = ({imgs,link})=>{
        return (
            <div >
                {imgs.map(url=>{
                    return(
                    <div key={url}
                    //  onMouseEnter={(e)=>handleImgHoverIn(e.target)} 
                    // onMouseLeave={(e)=>handleImgHoverOut(e.target)}
                    >
                    <img  src={'https://'+url+'.jpg'} 
                    ></img>
                    <span>
                        <button><a href={link} target="_blank">看文章</a></button>
                        <button><a href={'https://'+url+'.jpg'} target="_blank">看圖片</a></button>
                    </span>
                    </div>
                    )
                })}
                
            </div>
        )
    }
    const currentTime = () =>{
        let currenttime = new Date().toLocaleTimeString()
        return currenttime
    }
    // loading 圖片start
    const antIcon = <LoadingOutlined style={{ fontSize: 48 }} spin />;
    const loading = (
        <div className="text-center mt-3">
        <Spin indicator={antIcon} />
        </div>
    ) 
    // loading 圖片end
        
   
    return (
    <>
    <div className="container">
        
        {/* 熱門文章開始 */}
        <Carousel autoplay style={{display:'none'}}>
        {topContentDisplay}
        </Carousel>
        {/* 熱門文章end */}

        {/* <h5>更新時間:{new Date().toLocaleTimeString()}</h5>
        <Clock/> */}
        <div className="d-flex justify-content-around flex-wrap my-3">
            <p className="col-11 col-md-3 my-2" style={{fontSize:'20px',margin:'0'}}>目前顯示{pttTitle.length}篇文章</p>
            <Select 
            className="col-11 col-md-3 my-2"
            defaultValue="推文數篩選" 
            style={{ width: 200 }} 
            onChange={handleChange}>
                <Option value="10">>10</Option>
                <Option value="20">>20</Option>
                <Option value="0">0</Option>
            </Select>
            <Select
            className="col-11 col-md-3 my-2"
            defaultValue="排序方式" 
            style={{ width: 200 }} 
            onChange={handleSort}>
                <Option value='1'>最多推</Option>
                <Option value="2">最多噓</Option>
                <Option value="0">預設</Option>
            </Select>
        </div>
        {/* 最多推4則 */}

        <div className='d-flex flex-wrap justify-content-around'>
            <div className="col-12 top4 col-md-3">
                <p>最多推
                    <button id="up1"  onClick={(e)=>handleHide1(e.target)}>
                       <AiOutlineUp/> 
                    </button>
                    <button id="down1" style={{display:'none'}}onClick={(e)=>handleShow1(e.target)}>
                        <AiOutlineDown />
                    </button>
                </p>
                
                {top4article}
            </div>
            {/* 圖文瀏覽 */}
            
            <div className="col-12 col-md-8 imgbrowse">
                
                <p>圖文瀏覽
                    <button id="up2"  onClick={(e)=>handleHide2(e.target)}>
                       <AiOutlineUp/> 
                    </button>
                    <button id="down2" style={{display:'none'}}onClick={(e)=>handleShow2(e.target)}>
                        <AiOutlineDown />
                    </button>
                </p>
                {isloadingImg?loading:
                <div className="articleImgs">
                    {top3articlecontent.map((item,index)=>{
                    return (
                        <Child1 key={index} imgs={item.img} link={item.url}/>
                    )

                })}
                </div>
                }
            </div>
        </div>
        <div className="d-flex flex-wrap justify-content-around allarticle">
        {gossipContent()}
        </div>
    </div>

    
    </>
    )

}

export default withRouter(Ptt)