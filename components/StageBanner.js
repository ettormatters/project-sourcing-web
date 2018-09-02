import React from 'react'
import getConfig from 'next/config'
const {publicRuntimeConfig} = getConfig()

class StageBanner extends React.Component {
    render(){
        return(
            <div>
                <div className="StageBanner-Wrapper">
                    <div className="StageBanner-item">
                        <div className="Centering">
                            <img src={`${publicRuntimeConfig.staticFolder}/image/banner.jpg`}/>
                        </div>
                    </div>
                </div>
                <style jsx>{`
                    .StageBanner-Wrapper {
                        width: 100%;
                        background-image: linear-gradient(to right, #4e5e75 , #714554);
                    }
                    
                    .StageBanner-item {
                        position: relative;
                        height: 370px;
                        overflow: hidden;
                    }

                    .Centering {
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        opacity: 0.5;
                        -webkit-transform: translate(50%,50%);
                        -ms-transform: translate(50%,50%);
                        transform: translate(50%,50%);
                    }

                    img {
                        position: absolute;
                        top: 0;
                        left: 0;
                        max-height: 100%;
                        width: auto;
                        min-width: 640px;
                        -webkit-transform: translate(-50%,-50%);
                        -ms-transform: translate(-50%,-50%);
                        transform: translate(-50%,-50%);
                    }
                `}</style>
            </div>
        );
    }
}

export default StageBanner