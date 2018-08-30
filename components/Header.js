import React from 'react'
import Link from 'next/link'
import getConfig from 'next/config'
const {publicRuntimeConfig} = getConfig()

//if render 로 분기. <- sign 상태 = 세션체크
class Header extends React.Component {
    render(){
        return(
            <div className="header">
                <div className="wide-view">
                <div className="logo">
                    <img src={`${publicRuntimeConfig.staticFolder}/image/Logo.png`} alt="logo"/>
                </div>
                <span className="nav-hor">
                    <span className="normal">
                        <Link href="/">
                            <a className="option">Stage</a>
                        </Link>
                        <Link href="/about">
                            <a className="option">About</a>
                        </Link>
                        <Link href="/profile">
                            <a className="option">Profile</a>
                        </Link>
                    </span>
                    <span className="cuttail">
                        <Link href="/siginin">
                            <a className="option">Sign in</a>
                        </Link>  
                        <Link href="/siginup">
                            <a className="option">Sign Up</a>
                        </Link> 
                    </span>
                </span>
                <span className="shortcut">
                    <a className="shortcut-button" href="javascript:void(0)" onClick={(e)=>{
                        console.log('clicked');
                        const shortcut = e.target.parentElement.parentElement.parentElement.querySelector('.shortcut');
                        //const shortcuthover = e.target.parentElement.parentElement.parentElement.querySelector('.shortcut:hover');
                        const vernav = shortcut.parentElement.parentElement.querySelector('.nav-ver');
                        console.log(shortcut);
                        //console.log(shortcuthover);
                        console.log(vernav);
                        console.log(vernav.style);
                        console.log(vernav.style.display);
                        if (vernav.style.display == 'none'){
                            vernav.style.display = 'block';
                            //shortcut.style.opacity = '1.0';
                            console.log('?');
                        } else {
                            vernav.style.display = 'none';
                            //shortcut.style.opacity = '0.4';
                        }
                    }}>
                        <img src={`${publicRuntimeConfig.staticFolder}/image/short.png`} alt="menu"/>
                    </a>
                </span>
                </div>
                <div className="nav-ver">
                    <div className="normal">
                        <Link href="/">
                            <a className="option">Stage</a>
                        </Link>
                        <Link href="/about">
                            <a className="option">About</a>
                        </Link>
                        <Link href="/profile">
                            <a className="option">Profile</a>
                        </Link>
                    </div>
                    <div className="cuttail">
                        <Link href="/siginin">
                            <a className="option">Sign in</a>
                        </Link>  
                        <Link href="/siginup">
                            <a className="option">Sign Up</a>
                        </Link> 
                    </div>
                </div>
                <style jsx>{`
                    .header {
                        z-index: 1000;
                        padding: 10px 10% 10px 10%;
                        align-items: center;
                        margin-bottom: 30px;
                        background-color: #FFFFFF;
                        opacity: 0.9;
                        box-shadow: 0 4px 8px rgba(0,0,0,0.12);
                        position: -webkit-sticky;
                        position: sticky;
                        top: 0;
                    }

                    .wide-view {
                        display: flex;
                    }

                    .logo {
                        flex: 20%;
                    }

                    .shortcut {
                        display: none;
                        margin: auto;
                        opacity: 0.4;
                        transition: color 0.2s ease;
                        cursor: pointer;
                    }

                    .shortcut:hover {
                        opacity: 1.0;
                    }

                    .nav-hor {
                        display: flex;
                        justify-content: flex-end;
                        margin: auto;
                    }

                    .option {
                        margin: 15px;
                        color: #A6A6A6;
                        opacity: 1.0;
                        transition: color 0.2s ease;
                        text-decoration: none;
                    }

                    .option:hover {
                        color: #000000;
                        opacity: 1.0;
                    }

                    .nav-ver {
                        display: none;
                        margin-top: 10px;
                        padding-bottom: 10px;
                        margin-bottom: 0px;
                        border-top: 2px solid #000000;
                        background-color: #F2F2F2;
                        opacity: 1.0;
                        align: center;
                    }

                    .nav-ver .normal, .nav-ver .cuttail {
                        display: block;
                    }

                    .nav-ver .option {
                        display: block;
                        text-align: center;
                    }

                    @media screen and (max-width: 992px) {
                        .header {
                            padding: 10px 40px 10px 40px;
                        }
                    }

                    @media screen and (max-width: 760px) {
                        .nav-hor {
                            display: none;
                        }

                        .shortcut {
                            display: flex;
                        }
                    }

                    @media screen and (max-width: 600px) {
                        .header {
                            padding: 10px 10px 10px 10px;
                        }
                    }
                `}</style>
            </div>
        );
    }
}

export default Header