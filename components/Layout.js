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
                        margin-top: 30px;
                    }
                    
                    .container {
                        display: flex;
                        flex-wrap: wrap;
                        align-items: center;
                    }            
                `}</style>
            </div>
        );
    }
}

export default Layout