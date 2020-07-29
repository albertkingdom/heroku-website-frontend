import React from 'react'
import './home.scss'

const Home = ()=>{
    return (
        <>
        <div className="banner">
            <div className="homecontainer">
                <div className="banner-txt">
                <h1>Hello</h1>
                <p>This is a personal project<br/>分區介紹:</p>
                <ul>
                    <li><p>Ptt八卦版</p>以Node.JS即時爬取ptt八卦版文章和圖片，包含推文排序功能、以圖瀏覽文章功能
                    </li>
                    <li><p>資策會專題作品</p>資策會專題作品個人負責主要頁面截圖
                    </li>
                    <li><p>Todo</p>待辦事項，連結資料庫
                    </li>
                </ul>
                <p><b>Contact Me:</b></p>
                <p>albertkingdom@gmail.com</p>
                </div>
            </div>
        </div>
        </>
        )
}

export default Home