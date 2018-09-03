import React from 'react'
import Link from 'next/link'
import css from '../style/hwistyle.css'
import getConfig from 'next/config'
const {publicRuntimeConfig} = getConfig()

//if render 로 분기. <- sign 상태 = 세션체크
class Header extends React.Component {
    render(){
        return(
            <div className={css.Header}>
                <div className={css.WideView}>
                <div className={css.Logo}>
                    <img src={`${publicRuntimeConfig.staticFolder}/image/Logo.png`} alt="logo"/>
                </div>
                <span className={css.NavHor}>
                    <span className={css.Normal}>
                        <Link href="/">
                            <a className={css.Option}>Stage</a>
                        </Link>
                        <Link href="/about">
                            <a className={css.Option}>About</a>
                        </Link>
                        <Link href="/profile">
                            <a className={css.Option}>Profile</a>
                        </Link>
                    </span>
                    <span className={css.Cuttail}>
                        <Link href="/siginin">
                            <a className={css.Option}>Sign in</a>
                        </Link>  
                        <Link href="/siginup">
                            <a className={css.Option}>Sign Up</a>
                        </Link> 
                    </span>
                </span>
                <span className={css.Shortcut}>
                    <a className={css.ShortcutButton} href="javascript:void(0)" onClick={(e)=>{
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
                <div className={css.NavVer}>
                    <div className={css.Normal}>
                        <Link href="/">
                            <a className={css.Option}>Stage</a>
                        </Link>
                        <Link href="/about">
                            <a className={css.Option}>About</a>
                        </Link>
                        <Link href="/profile">
                            <a className={css.Option}>Profile</a>
                        </Link>
                    </div>
                    <div className={css.Cuttail}>
                        <Link href="/siginin">
                            <a className={css.Option}>Sign in</a>
                        </Link>  
                        <Link href="/siginup">
                            <a className={css.Option}>Sign Up</a>
                        </Link> 
                    </div>
                </div>
            </div>
        );
    }
}

export default Header