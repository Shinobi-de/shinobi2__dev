import React from 'react'
import './possible.css'
import FeatureImage from '../../assets/FeatureImage.png'

function Possible(){
    return(
        <div className='gpt3__possibility section__padding' id='possible'>
            <div className='gpt3__possibility-image'>
                <img src={FeatureImage} alt="possibility" />
            </div>
            <div className='gpt3__possibility-content'>
                <h4>Request Early Acceess to get started</h4>
                <h1 className='gradient__text'>The Possibilties are beyond your imagination</h1>
                <p>Not bad for travelling assistance indulgence unpleaseing. Not thoughts exercise blessing indulgence way  everything joy alteratio boisterous</p>
                <h4>Request Early Acceess to get started</h4>
            </div>
        </div>
    )
}

export default Possible