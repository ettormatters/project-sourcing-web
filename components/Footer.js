import React from 'react'
import css from '../style/hwistyle.css'

class Footer extends React.Component {
    render(){
        return(
            <div className={css.Footer}>
                <div className={css.FooterItem}>
                    PARTYPPLE Inc.
                </div>
            </div>
        );
    }
}

export default Footer