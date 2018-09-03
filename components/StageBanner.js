import React from 'react'
import css from '../style/hwistyle.css'
import getConfig from 'next/config'
const {publicRuntimeConfig} = getConfig()

class StageBanner extends React.Component {
    render(){
        return(
            <div>
                <div className={css.StageBannerBox}>
                    <div className={css.StageBannerItem}>
                        <div className={css.Centering}>
                            <img className={css.BannerImg} src={`${publicRuntimeConfig.staticFolder}/image/banner.jpg`}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default StageBanner