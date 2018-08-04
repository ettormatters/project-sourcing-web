import React from 'react'
import Link from 'next/link'

class Header extends React.Component {
    render(){
        return(
            <div className="header">
                <span className="logo">
                    PARTY.com
                </span>
                <span className="navigation">
                    <Link href="/">
                        <a>Stage</a>
                    </Link>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                    <Link href="/profile">
                        <a>Profile</a>
                    </Link>
                </span>
                <style jsx>{`
                    .header {
                        z-index: 1000;
                        padding: 10px 10% 10px 10%;
                        display: flex;
                        align-items: center;
                        margin-bottom: 30px;
                        background-color: black;
                        opacity: 0.9;
                        box-shadow: 0 2px 4px rgba(255,255,255,0.12);
                        position: -webkit-sticky;
                        position: sticky;
                        top: 0;
                     }

                    .logo {
                        flex: 20%;
                        color: #F1E5CD;
                    }

                    .navigation {
                        display: flex;
                        justify-content: flex-end;
                    }

                    a {
                        margin: 15px;
                        color: #707070;
                        transition: color 0.2s ease;
                        text-decoration: none;
                        /*state color*/
                    }

                    a:hover {
                        color: white;
                    }

                    @media screen and (max-width: 992px) {
                        .header {
                            padding: 10px 40px 10px 40px;
                        }
                    }
                    
                    @media screen and (max-width: 600px) {
                        .header {
                            padding: 10px 10px 10px 10px;
                        }
                        /*a tag*/
                    }
                `}</style>
            </div>
        );
    }
}

export default Header