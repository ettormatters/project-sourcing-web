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
                        margin: 0;
                        padding: 0;
                    }

                    /*this.props.childeren에서 category와 postview 묶어내기,
                    display: flex; justify-content: center;*/
            
                `}</style>
            </div>
        );
    }
}

export default Layout