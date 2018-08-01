import React from 'react'
import Link from 'next/link'

class Header extends React.Component {
    render(){
        return(
            <div className="header">
                <div className="logo">
                    PARTY.com
                </div>
                <div className="navigation">
                    <Link href="/">
                        <a>Stage</a>
                    </Link>
                    <Link href="/profile">
                        <a>Profile</a>
                    </Link>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </div>
                <style jsx>{`
                    .header {
                        padding: 40px 10% 10px 10%;
                        display: flex;
                        flex-direction: row; /*적용안됨*/
                        margin-bottom: 30px;
                        /*shadowed border, margin 해제?*/
                        /*sticky*/
                        /*opacity*/
                    }

                    .logo {
                        flex: 20%;
                    }

                    .navigation {
                        flex: 80%;
                        display: flex;
                        justify-content: flex-end;
                    }

                    a {
                        margin: 15px;
                        text-decoration: none;
                        /*state color*/
                    }

                    @media screen and (max-width: 992px) {
                        .header {
                            padding: 40px 40px 10px 40px;
                        }
                    }
                    
                    @media screen and (max-width: 600px) {
                        .header {
                            padding: 40px 10px 10px 10px;
                        }
                    }
                `}</style>
            </div>
        );
    }
}

export default Header