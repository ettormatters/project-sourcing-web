import React from 'react'
import Link from 'next/link'

class Header extends React.Component {
    render(){
        return(
            <div>
                <Link href="/">
                    <a>Stage</a>
                </Link>
                <Link href="/profile">
                    <a>Profile</a>
                </Link>
                <Link href="/about">
                    <a>About</a>
                </Link>

                <style jsx>{`
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