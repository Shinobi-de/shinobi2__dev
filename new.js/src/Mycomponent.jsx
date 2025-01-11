import React from  'react'
import './index.css'

import {Footer, Blog, Possible, Features, WhatGPT3, Header } from './containers'
import {CTA, Brand, Navbar} from './components'
import './App.css'

function Mycomponent(){


    return(
        <div className='App'>
            <div className='gradient__bg'>
                <Navbar />
                <Header/>
            </div>
            <Brand/>
            <WhatGPT3/>
            <Features/>
            <Possible/>
            <CTA/>
            <Blog/>
            <Footer/>
        </div>
    )
}

export default Mycomponent

