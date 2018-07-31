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
                    header {
                        display: flex;
                        flex-direction: row; /*적용안됨*/
                    }

                    a {
                        margin: 15px;
                        text-decoration: none;
                    }
                `}</style>
            </div>
        );
    }
}

export default Header