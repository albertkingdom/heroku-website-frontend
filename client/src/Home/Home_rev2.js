import React,{ useState, useEffect} from 'react'
import './Home_rev2.scss'
import { Timeline } from 'antd';
import Notification from '../component/Notification'
import $ from 'jquery';
import { AiFillGithub,AiFillLinkedin } from 'react-icons/ai'
import { FiCodesandbox } from 'react-icons/fi'
import Square from './square'
import Hit_counter from './Hit_counter'
import IntroBlock from '../component/IntroBlock.js'
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
        <div className="up ">
          <div className="d-flex justify-content-center flex-wrap">
            <div className="hello-text col-md-4 col-12">
              <h1>Hello</h1>
              <h2>我是煜凱</h2>
              <h4 className="text-uppercase">junior web developer</h4>
              <p>This is a personal project.</p>
            </div>
            <div className="front-img col-md-4 col-12 text-center">
              <img className="img-fluid" src="./programing.png" title="Icons made by Eucalyp from www.flaticon.com"/>
              
            </div>
          </div>
        </div>
        <h2 class="text-center title">網站區塊介紹</h2>
        {/* <div class="horizontalline"></div> */}
        
        <div class="d-flex justify-content-center flex-wrap website-intro">
            
            <div class="intro col-md-2 col-10">
                <div className="img-wrapper">
                  <img src="./blah.jpg"></img>
                </div>
                
                <h4><a href="/ptt">PTT八卦版</a></h4>
                <p>
                即時爬取PTT八卦版文章和圖片，包含推文排序功能、以圖瀏覽文章功能，運用React.js結合Node.js
                </p>
                <a href="/ptt">看更多</a>
            </div>
            <div class="intro col-md-2 col-10">
              <div className="img-wrapper">
                <img src="./presentation.jpg"></img>
              </div>
                <h4><a href="/project">資策會專題作品</a></h4>
                <p>資策會專題作品的主要頁面截圖，為一個販售遊戲的電商平台的商品頁面，運用React.js結合Node.js存取database資料</p>
                <a href="/project">看更多</a>
            </div>
        </div>
        <div id="notify">
            {/* <Notification/> */}
            <img className="img-fluid" src="./mickeyhand.png"/>
        </div>
        <h2 class="text-center title">其他專案</h2>
        <div class="d-flex justify-content-center sideProject">
          <div class="intro col-md-2 col-10">
                <img className="" src="./coronavirus.svg"></img>
                <h4><a href="https://codesandbox.io/s/covid19-info-0pitj" target="_blank">新冠肺炎資訊看版</a></h4>
                <p>串接api，將新冠肺炎資訊圖表化</p>
                <a href="https://codesandbox.io/s/covid19-info-0pitj" target="_blank">看更多</a>
            </div>
        </div>
    {/* <div class=" d-flex justify-content-center flex-wrap"> */}
      <div class="col-md-12 col-12 technique">
        {/* <div class="d-flex"> */}
          {/* <div class="toprow first">前端技能</div> */}
          {/* <div class="box col-6"> */}
            {/* <ul>
              <li>HTML</li>
              <li>CSS/SCSS</li>
              <li>JavaScript ES6</li>
              <li>React.js</li>
              
            </ul> */}
            <h2 className="text-center">技能</h2>
            <Square />
          {/* </div> */}
        {/* </div> */}

        {/* <div class="d-flex mt-3 toprow2"> */}
          {/* <div class="toprow first">後端技能</div> */}
          {/* <div class="box col-6"> */}
            {/* <ul>
              <li>Node.js</li>
              <li>MySQL</li>
            </ul> */}
          {/* </div> */}
        {/* </div> */}
      </div>

      <div class="aboutme text-center">
        
        {/* <div class="avator"></div> */}
        <h2 className="text-center text-uppercase">about me</h2>
        <div className="d-flex flex-wrap justify-content-center">
        {/* <h3>林煜凱 Albert Lin</h3> */}
          <div className="contact col-md-4 col-12">
            <img src="./avator.svg" title="made by flaticon"/>
            <p style={{'fontSize':'16px'}}>albertkingdom@gmail.com</p>
            <div className="d-flex justify-content-center" id="links">
                <a href="https://github.com/albertkingdom"><AiFillGithub/></a>
                <a href=""><AiFillLinkedin/></a>
                <a href=""><FiCodesandbox /></a>
            </div>
          </div>
          <div className="timeline col-md-4 col-12">
            <Timeline mode={mode} style={{marginTop:'10px'}}>
              <Timeline.Item label="2020 Apr">資策會前端工程師養成班結業</Timeline.Item>
              <Timeline.Item label="2016-2018 Dec">儀控工程師</Timeline.Item>
              <Timeline.Item label="2015">碩士班畢業</Timeline.Item>
              
            </Timeline>
          </div>
        </div>
        
        
        
        
      </div>
    {/* </div> */}
    <div class="footer text-center">
    
      <Hit_counter />
    </div>
        </>
    )
}

export default Home_rev2