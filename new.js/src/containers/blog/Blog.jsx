import React from 'react'
import {Article} from '../../components'
import './blog.css'
import {blog01, blog02, blog03,blog04, blog05} from './import'

function Blog(){

    return (
        
        <div className='gpt3__blog section__padding' id='blog'> 
            <div className='gpt3__blog-heading'>
                <h1 className='gradient__text'>A Lot Is Happening We Are Blogging</h1>
            </div>
            <div className='gpt3__blog-container'>
                <div className='gpt3__blog-container_GroupA'>
                    <Article imgurl={blog01} date={'January 6 2025'} title={'GPT-3 and Open AI is the future. Let us explore how it is ?'} />
                </div>
                <div className='gpt3__blog-container_GroupB'>
                    <Article imgurl={blog02} date={'January 6 2025'} title={'GPT-3 and Open AI is the future. Let us explore how it is ?'}/>
                    <Article imgurl={blog03} date={'January 6 2025'} title={'GPT-3 and Open AI is the future. Let us explore how it is ?'}/>
                    <Article imgurl={blog04} date={'January 6 2025'} title={'GPT-3 and Open AI is the future. Let us explore how it is ?'}/>
                    <Article imgurl={blog05} date={'January 6 2025'} title={'GPT-3 and Open AI is the future. Let us explore how it is ?'}/>
                </div>
            </div>
        </div>
    )
}

export default Blog