import React from 'react'
import './Article.css'

function Article({imgurl, date, title}){

    return (
        <div className='gt3__blog-container_article'>
            <div className='gpt3__blog-container_article-img'>
                <img src={imgurl} alt="" />
            </div>
            <div className='gpt3__blog-container_article-content'>
                <div>
                    <p>{date}</p>
                    <h3>{title}</h3>
                </div>
                <p>Read full article</p>
            </div>
        </div>
    )
}

export default Article