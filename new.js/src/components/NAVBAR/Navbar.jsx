
import React, {useState} from 'react'
import './Navbar.css'
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/GPT-3.svg'

const Menu = () => (
    <>
     <p><a href="#home">Home</a></p>
     <p><a href="#wgpt-3">What Is GPT-3</a></p>
     <p><a href="#possibile">Open-AI</a></p>
     <p><a href="#features">Case Studies</a></p>
     <p><a href="#blog">Library</a></p> 
    </>
)

function Navbar(){

    const [togglemenu, setToggleMenu] = useState(false);

    return (
        <div className='gpt3__navbar'>
            <div className='gpt3__navbar-links'>
                <div className='gpt3__navbar-links_logo'>
                    <img src={logo} alt="GPT-3" />
                </div>
                <div className='gpt-3__navbar-links_container'>
                    <Menu />
                </div>
            </div>
            <div className='gpt-3__navbar-sign'>
                <p>Sign in</p>
                <button typeof='button'>Sign up</button>
            </div>
            <div className='gpt-3__navbar-menu'>
                {togglemenu
                 ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} /> 
                 : <RiMenu3Line  color='#fff' size={27} onClick={() => setToggleMenu(true)} /> 
                    
                }
                {togglemenu && (
                    <div className='gpt-3__navbar-menu_container scale-up-center'>
                        <div className='gpt-3__navbar-menu_container-links'>
                            <Menu />  
                        </div>
                        <div className='gpt-3__navbar-menu_container-links-sign gpt-3__navbar-sign'>
                            <p>Sign in</p>
                            <button typeof='button'>Sign up</button>
                        </div>
                        
                    </div>
                )}
            </div>
        </div>
    )
}
export default Navbar