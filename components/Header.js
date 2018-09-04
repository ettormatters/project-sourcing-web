import React from 'react';
import Link from 'next/link';
import css from '../style/hwistyle.css';
import getConfig from 'next/config';
const {publicRuntimeConfig} = getConfig()

//if render 로 분기. <- sign 상태 = 세션체크
class Header extends React.Component {
    render(){
        return(
            <div className={css.Header}>
                <div className={css.Logo}>
                    <img src={`${publicRuntimeConfig.staticFolder}/image/Logo.png`} alt="logo"/>
                </div>
                <div className={css.NavBar}>
                    <Link href="/">
                        <a className={css.Option}>Stage</a>
                    </Link>
                    <Link href="/about">
                        <a className={css.Option}>About</a>
                    </Link>
                    <a className={css.DropdownOption}>
                        <details className={css.Details}>
                            <summary className={css.Summary}>Title</summary>
                                <img className={css.ArrowShadow} src={`${publicRuntimeConfig.staticFolder}/image/arrowshadow.png`}/>
                                <img className={css.Arrow} src={`${publicRuntimeConfig.staticFolder}/image/arrow.png`}/>
                                <ul className={css.DetailsMenu}>
                                    <div className={css.On}>
                                        <li className={css.MenuList}><Link href="/profile"><a className={css.MenuItem}>Your profile</a></Link></li>
                                        <li className={css.Divider}></li>
                                    </div>
                                    <li className={css.MenuList}><Link href="/help"><a className={css.MenuItem}>Help</a></Link></li>
                                    <li className={css.MenuList}><Link href="/settings"><a className={css.MenuItem}>Settings</a></Link></li>
                                    <li className={css.Divider}></li>
                                    <div className={css.Off}>
                                        <li className={css.MenuList}><Link href="/signout"><a className={css.MenuItem}>Sign out</a></Link></li>
                                    </div>
                                    <div className={css.On}>
                                        <li className={css.MenuList}><Link href="/signin"><a className={css.MenuItem}>Sign in</a></Link></li>
                                        <li className={css.MenuList}><Link href="/signup"><a className={css.MenuItem}>Sign up</a></Link></li>
                                    </div>
                                </ul>
                        </details>
                    </a>
                </div>
            </div>
        );
    }
}

export default Header