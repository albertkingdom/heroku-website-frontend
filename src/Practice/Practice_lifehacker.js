import React, { useEffect } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import './practice_lifehacker.scss'
import $ from 'jquery'

function Practice_lifehacker (){

    useEffect(()=>{
        $('.menu').click(function(){
            $('.menu-content').toggleClass('active')
            $(this).toggleClass('active')
        })

        $('.searchicon').click(function(){
            $('.searcharea').toggleClass('active')
        })
    })
    // 每5s切換圖片
    useEffect(()=>{
        // let imgs = document.querySelectorAll('.img-wrapper')
        // console.log('imgs',imgs[0])
        let i=0;
        const timeID = setInterval(()=>{
            i<2?i++:i=0;
            console.log(i)
            if(i == 1 || 2){
                $('.img-wrapper').eq(i).toggleClass('active')
                $('.img-wrapper').eq(i-1).toggleClass('active')
                
            }else{
                $('.img-wrapper').eq(i).toggleClass('active')
                $('.img-wrapper').eq(2).toggleClass('active')
                
            }
            
        },5000)
        
        return ()=>clearInterval(timeID)

        
    })
    
    return (
        <>
        <nav className="d-flex">
            <div className="logo">LOGO</div>
            <div className="aa">Do everything better</div>
            <AiOutlineSearch className="searchicon"/>
            <input className="searcharea"/>
            <div className="function_bar d-flex">
                <div className="function function1">
                    <div className="circle"></div>
                    <span>Shop</span>
                </div>
                <div className="function function2">
                    <div className="circle"></div>
                    <span>Subscribe</span>
                </div>
                <div className="function function3">
                    <div className="circle"></div>
                </div>

            </div>
            
            
            <div className="menu">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            
        </nav>
        <div className="menu-content">
                
        </div>
        <div className="content d-flex flex-wrap mt-3">
            <div className="main col-12 col-md-6">
               <img src="https://fakeimg.pl/614x345/" alt=""/>
               <div className="main-title">
                   <a>TRAVEL</a>
                   <h2>
                       Lorem ipsum dolor sit amet
                    </h2>
                    <p>Lebro James</p>
               </div> 
            </div>
            <div className="sub col-12 col-md-3">
                <div className="sub1">
                    <img src="https://fakeimg.pl/294x165/" alt=""/>
                    <h5>Lorem ipsum dolor sit amet</h5>
                </div>
                <div className="sub2">
                    <img src="https://fakeimg.pl/294x165/" alt=""/>
                    <h5>Lorem ipsum dolor sit amet</h5>
                </div>
            </div>
            <div className="sidebar col-12 col-md-3">
                <h5>More</h5>
                <div className="sidebar1 d-flex">
                    <img className="mr-2" src="https://fakeimg.pl/71x40/" alt=""/>
                    <h5>Lorem ipsum dolor sit amet</h5>
                </div>
            </div>
        </div>
        <div className="article d-flex">
            <div className="news col-md-8">

            </div>
            <div className="alsolike col-md-4">
                <b>You may also like</b>
                <div className="d-flex">
                    <div className="col img-wrapper active">
                        <img className="" src="/nba1.jpg" alt=""/>
                        <span className="text-center ">1</span>
                    </div>
                    <div className="col img-wrapper">
                        <img className="" src="/nba2.jpg" alt=""/>
                        <span className="text-center">2</span>
                    </div>
                    <div className="col img-wrapper">
                        <img className="" src="/nba3.jpg" alt=""/>
                        <span className="text-center">3</span>
                    </div>
                    
                </div>
                <div className="progress"></div>
                
            </div>
        </div>
        </>
    )
}

export default Practice_lifehacker