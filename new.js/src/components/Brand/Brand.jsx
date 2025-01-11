import React from 'react'
import './Brand.css'
import {google,slack,atlassian,dropbox,shopify} from './import.js'

function Brand(){

    return (
        <div className='gpt3__brand section-padding'> 
            <div>
                <img src={google} alt="google" />
            </div>

            <div>
                <img src={slack} alt="google" />
            </div>

            <div>
                <img src={atlassian} alt="google" />
            </div>

            <div>
                <img src={dropbox} alt="google" />
            </div>

            <div>
                <img src={shopify} alt="google" />
            </div>
        </div>
    )
}

export default Brand