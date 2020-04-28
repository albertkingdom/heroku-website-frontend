import React,{ useState, useEffect} from 'react'
import './Home_rev2.scss'
import { Timeline } from 'antd';
import Notification from '../component/Notification'
import $ from 'jquery';
import { AiFillGithub,AiFillLinkedin } from 'react-icons/ai'
import Square from './square'
function Home_rev2(){

    const [mode, setMode] = useState('left');
    useEffect(()=>{
        $(window).scroll(function(){
            let scrolltop = $(this).scrollTop();
            let introoffset = $('.intro').offset();
            // console.log('intro offset',introoffset.top)
            // console.log('scrolltop',scrolltop)
            // if(scrolltop>=)
        })

        let offsetleft = $('.intro').offset().left
        console.log('offsetleft',offsetleft)
        // $('#notify').css('left',`${offsetleft-100}px`)
    },[])
    return (
        <>
        <div class="up text-center">
            <h1>Hello</h1>
            <p>This is a personal project.</p>
        </div>
        <h2 class="text-center title">網站介紹</h2>
        {/* <div class="horizontalline"></div> */}
        
        <div class="d-flex justify-content-center website-intro">
        
            <div class="intro col-2">
                <img src="./blah.jpg"></img>
                <h4><a href="/ptt">Ptt八卦版</a></h4>
                <p>
                即時爬取PTT八卦版文章和圖片，包含推文排序功能、以圖瀏覽文章功能，運用React.js結合Node.js
                </p>
                <a href="/ptt">看更多</a>
            </div>
            <div class="intro col-2">
                <img src="./presentation.jpg"></img>
                <h4><a href="/project">資策會專題作品</a></h4>
                <p>資策會專題作品的主要頁面截圖，為一個販售遊戲的電商平台的商品頁面，運用React.js結合Node.js存取database資料</p>
                <a href="/project">看更多</a>
            </div>
        </div>
        <div id="notify">
            {/* <Notification/> */}
            <img className="img-fluid" src="./mickeyhand.png"/>
        </div>
    <div class="self-intro d-flex justify-content-center">
      <div class="col-6 left">
        {/* <div class="d-flex"> */}
          {/* <div class="toprow first">前端技能</div> */}
          {/* <div class="box col-6"> */}
            {/* <ul>
              <li>HTML</li>
              <li>CSS/SCSS</li>
              <li>JavaScript ES6</li>
              <li>React.js</li>
              
            </ul> */}
            <Square />
          {/* </div> */}
        {/* </div> */}

        <div class="d-flex mt-3 toprow2">
          {/* <div class="toprow first">後端技能</div> */}
          {/* <div class="box col-6"> */}
            {/* <ul>
              <li>Node.js</li>
              <li>MySQL</li>
            </ul> */}
          {/* </div> */}
        </div>
      </div>

      <div class="col-3 right">
        {/* <h4><b>About Me</b></h4> */}
        {/* <div class="avator"></div> */}
        <p>林煜凱 Albert Lin</p>
        <p style={{'fontSize':'16px'}}>albertkingdom@gmail.com</p>
        <div className="d-flex justify-content-center" id="links">
          <a href="https://github.com/albertkingdom"><AiFillGithub/></a>
          <a href=""><AiFillLinkedin/></a>
        </div>
        
        <Timeline mode={mode} style={{marginTop:'10px'}}>
            <Timeline.Item label="2020 Apr">資策會前端工程師養成班結業</Timeline.Item>
            <Timeline.Item label="2016-2018 Dec">儀控工程師</Timeline.Item>
            <Timeline.Item label="2015">碩士班畢業</Timeline.Item>
            
        </Timeline>
      </div>
    </div>
    <div class="footer">
     
      
    </div>
        </>
    )
}

export default Home_rev2