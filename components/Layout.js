import React from 'react'
import Header from './Header'
import Footer from './Footer'
import css from '../style/hwistyle.css'

class Layout extends React.Component {
    render(){
        return(
            <div className={css.Layout}>
                <Header />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}

export default Layout