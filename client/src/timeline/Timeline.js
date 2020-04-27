import React from 'react';
import './Timeline.scss'

function Timeline(){
    return (
        <>
        <div className="container">
            <h1>時間軸切版練習</h1>
        <ul className="timeline">
            <li>
                <a href="#">
                    <h2>Now</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus quibusdam voluptas error sunt deleniti possimus aliquam asperiores repudiandae repellendus excepturi doloribus aut molestias quisquam placeat rem, natus ex iusto! Repudiandae!</p>
                </a>

            </li>
            <li>
                <a href="#">
                    <h2>1994</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga repellendus minima, quidem asperiores commodi architecto doloribus quia voluptates facilis veritatis, ab ut. Fugiat tenetur ratione laborum id totam cumque laudantium.</p>
                </a>
            </li>
            <li>
                <a href="#">
                    <h2>1991</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga repellendus minima, quidem asperiores commodi architecto doloribus quia voluptates facilis veritatis, ab ut. Fugiat tenetur ratione laborum id totam cumque laudantium.</p>
                </a>
            </li>
            <li>
                <a href="#">
                    <h2>1963</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga repellendus minima, quidem asperiores commodi architecto doloribus quia voluptates facilis veritatis, ab ut. Fugiat tenetur ratione laborum id totam cumque laudantium.</p>
                </a>
            </li>
            <li>
                <a href="#">
                    <h2>1958</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga repellendus minima, quidem asperiores commodi architecto doloribus quia voluptates facilis veritatis, ab ut. Fugiat tenetur ratione laborum id totam cumque laudantium.</p>
                </a>
            </li>
        </ul>
        </div>
        </>
    )
}

export default Timeline