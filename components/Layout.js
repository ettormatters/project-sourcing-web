import React from 'react'
import Header from './Header'
import Footer from './Footer'

class Layout extends React.Component {
    render(){
        return(
            <div>
                <Header />
                {this.props.children}
                <Footer />
                
                <style jsx>{`
                    div {
                        margin: 40px;
                        padding: 20px;
                        border: 1px solid #DDD;
                    }
                `}</style>
            </div>
        );
    }
}

export default Layout