import React from 'react'
import './whatGPT3.css'
import {Feature} from '../../components'

function WhatGPT3(){

    return (
        <div className='gpt3__whatgpt3 section__margin' id='wgpt-3'>
            <div className='gpt3__whatgpt3-feature'>
                <Feature title={'What is GPT-3'}  text={"Lorem ipsum dolor sit amet, Inventore delectus, distinctio aspernatur fugiat ipsam, repudiandae laudantium non expedita ."}/>
            </div>
            <div className='gpt3__whatgpt3-heading'>
                <h1 className='gradient__text'>The Possibilties are beyond your imagination</h1>
                <p>Explore The Library</p>
            </div>
            <div className='gpt3__whatgpt3-container'>
                <Feature title={'Chatbots'} text={'We so opinion friends me message as delight. Whole front do of plate heard oh ought. '} />
                <Feature title={'Knowledgeable'} text={'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'} />
                <Feature title={'Education'} text={'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'}/>
            </div>
        </div>
    )
}

export default WhatGPT3 